// ** references
// algolia community - amp support for algolia: https://discourse.algolia.com/t/amp-support-for-algolia/1697
// glitch - amp-script-demos: html: https://glitch.com/edit/#!/amp-script-demos?path=public%2Falgolia.html%3A142%3A8
// glitch - amp-script-demos: js: https://glitch.com/edit/#!/amp-script-demos?path=public%2Falgolia.js%3A9%3A0

// const blogConfig = require(
//   `${path.join(process.cwd(), 'blog.config.js')}`
// )
// const applicationId = blogConfig.appId
// console.log(applicationId)
// const apiKey = blogConfig.searchOnlyApiKey
// const indexName = blogConfig.indexName
const applicationId = "WOHC62BVSP"
const apiKey = "c858d2926cafc635503658417e963722"
const indexName = "prod_blogOriverkdev"


const QUERY_URL =
  `https://${applicationId}-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.34.0)%3B%20Browser%20(lite)%3B%20instantsearch.js%20(3.7.0)%3B%20JS%20Helper%20(2.28.0)&x-algolia-application-id=${applicationId}&x-algolia-api-key=${apiKey}`;
  // `https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.34.0)%3B%20Browser%20(lite)%3B%20instantsearch.js%20(3.7.0)%3B%20JS%20Helper%20(2.28.0)&x-algolia-application-id=latency&x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76`;

const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", onInput);

async function onInput(event) {
  const previousSearchResults = document.querySelector("#search-results");
  const newSearchResults = document.createElement("div");
  newSearchResults.setAttribute("id", "search-results");

  if (searchInput.value.length > 0) {
    const response = await runSearch(searchInput.value);
    const results = response.results[0].hits;
    console.log(results)

    results.forEach(result => {
      const item = document.createElement("div");
      item.classList.add("search-item")

      // amp-script needs to use AMP components
      const img = document.createElement("amp-img");
      img.setAttribute("src", result.image);
      img.setAttribute("width", 220);
      img.setAttribute("height", 151);
      img.setAttribute("layout", 'intrinsic');
      item.appendChild(img);

      const label = document.createElement("div");
      let text = result.name;
      if (text.length > 50) {
        text = text.substring(0, 50) + '...';
      }
      label.textContent = text;
      item.appendChild(label);

      newSearchResults.appendChild(item);
    });
  }
  document.body.replaceChild(newSearchResults, previousSearchResults);
}

async function runSearch(query) {
  const headers = {
    accept: "application/json",
    Referer: "",
    "content-type": "application/x-www-form-urlencoded"
  };

  // params: `query=${query}&hitsPerPage=16&maxValuesPerFacet=10&page=0&removeWordsIfNoResults=allOptional&highlightPreTag=__ais-highlight__&highlightPostTag=__%2Fais-highlight__&attributesToSnippet=%5B%22description%3A10%22%5D&snippetEllipsisText=%E2%80%A6&facets=%5B%22brand%22%2C%22free_shipping%22%2C%22price%22%2C%22rating%22%2C%22hierarchicalCategories.lvl0%22%5D&tagFilters=`

  const data = {
    requests: [
      {
        indexName: indexName,
        params: `query=${query}`
      }
    ]
  };
  const response = await fetch(QUERY_URL, {
    method: "POST",
    headers,
    body: JSON.stringify(data)
  });

  return response.json();
}
