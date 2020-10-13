// ** references
// algolia community - amp support for algolia: https://discourse.algolia.com/t/amp-support-for-algolia/1697
// glitch - amp-script-demos: html: https://glitch.com/edit/#!/amp-script-demos?path=public%2Falgolia.html%3A142%3A8
// glitch - amp-script-demos: js: https://glitch.com/edit/#!/amp-script-demos?path=public%2Falgolia.js%3A9%3A0

// const algolia = {
//   indexName = 'prod_blogOriverkdev',
//   appId = 'WOHC62BVSP',
//   apiKey = 'c858d2926cafc635503658417e963722'
// }

const algolia = {
  indexName= 'instant_search',
  appId = 'latency',
  apiKey = '6be0576ff61c053d5f9a3225e2a90f76'
}

const QUERY_URL =
  `https://${algolia.appId}-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.34.0)%3B%20Browser%20(lite)%3B%20instantsearch.js%20(3.7.0)%3B%20JS%20Helper%20(2.28.0)&x-algolia-application-id=${algolia.appId}&x-algolia-api-key=${algolia.apiKey}`;

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

      // amp-script needs to use AMP components
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

const params = {
  hitsPer = '16',
  maxValuesPerFacet = '10',
}

async function runSearch(query) {
  const headers = {
    accept: 'application/json',
    Referer: '',
    'content-type': 'application/x-www-form-urlencoded'
  };

  const data = {
    requests: [
      {
        indexName: algolia.indexName,
        params: `query=${query}`
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