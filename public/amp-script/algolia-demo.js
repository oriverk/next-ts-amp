const indexName = 'instant_search'
const appId = 'latency'
const apiKey = '6be0576ff61c053d5f9a3225e2a90f76'

const QUERY_URL =
  `https://${appId}-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.34.0)%3B%20Browser%20(lite)%3B%20instantsearch.js%20(3.7.0)%3B%20JS%20Helper%20(2.28.0)&x-algolia-application-id=${appId}&x-algolia-api-key=${apiKey}`;

const searchInput = document.querySelector('#search-input');
searchInput.addEventListener('input', onInput);

async function onInput(event) {

  const previousSearchResults = document.querySelector('#search-results');

  const newSearchResults = document.createElement('div');
  newSearchResults.setAttribute('id', 'search-results');

  if (searchInput.value.length > 0) {
    const response = await runSearch(searchInput.value);
    const results = response.results[0].hits;

    results.forEach(result => {
      const item = document.createElement('div');
      item.classList.add('search-item')

      const img = document.createElement('amp-img');
      img.setAttribute('src', result.image);
      img.setAttribute('width', 220);
      img.setAttribute('height', 151);
      img.setAttribute('layout', 'intrinsic');
      item.appendChild(img);

      const label = document.createElement('div');
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
    accept: 'application/json',
    Referer: 'https://instantsearchjs.netlify.com/examples/e-commerce/search/',
    'content-type': 'application/x-www-form-urlencoded'
  };

  const data = {
    requests: [
      {
        indexName: indexName,
        params: `query=${query}&hitsPerPage=16&maxValuesPerFacet=10&page=0&removeWordsIfNoResults=allOptional&highlightPreTag=__ais-highlight__&highlightPostTag=__%2Fais-highlight__&attributesToSnippet=%5B%22description%3A10%22%5D&snippetEllipsisText=%E2%80%A6&facets=%5B%22brand%22%2C%22free_shipping%22%2C%22price%22%2C%22rating%22%2C%22hierarchicalCategories.lvl0%22%5D&tagFilters=`
      }
    ]
  };
  const response = await fetch(QUERY_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  });

  return response.json();
}