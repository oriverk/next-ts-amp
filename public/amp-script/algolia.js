// ** references
// algolia community - amp support for algolia: https://discourse.algolia.com/t/amp-support-for-algolia/1697
// glitch - amp-script-demos: html: https://glitch.com/edit/#!/amp-script-demos?path=public%2Falgolia.html%3A142%3A8
// glitch - amp-script-demos: js: https://glitch.com/edit/#!/amp-script-demos?path=public%2Falgolia.js%3A9%3A0

const baseUrl = 'https://oriverk.dev'
const indexName = 'prod_blogOriverkdev'
const appId = 'WOHC62BVSP'
const apiKey = 'c858d2926cafc635503658417e963722'
const referer = 'https://play.oriverk.dev'

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
    // {"results":[{"hits":[{"id":"test","title":"only for test","create":"2020-09-01","update":"","tags":["test"],"content":" toc hoge code hoge code hoge code hoge","objectID":"11204930","_highlightResult":{"title":{"value":"__ais-highlight__only__/ais-highlight__ __ais-highlight__for__/ais-highlight__ __ais-highlight__test__/ais-highlight__","matchLevel":"full","fullyHighlighted":true,"matchedWords":["only","for","test"]},"tags":[{"value":"__ais-highlight__test__/ais-highlight__","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["test"]}],"content":{"value":" toc hoge code hoge code hoge code hoge","matchLevel":"none","matchedWords":[]}}}],"nbHits":1,"page":0,"nbPages":1,"hitsPerPage":16,"facets":{},"exhaustiveFacetsCount":true,"exhaustiveNbHits":true,"query":"only for test","params":"query=only for test&hitsPerPage=16&maxValuesPerFacet=10&page=0&removeWordsIfNoResults=allOptional&highlightPreTag=__ais-highlight__&highlightPostTag=__%2Fais-highlight__&attributesToSnippet=%5B%22description%3A10%22%5D&snippetEllipsisText=%E2%80%A6&facets=%5B%22brand%22%2C%22free_shipping%22%2C%22price%22%2C%22rating%22%2C%22hierarchicalCategories.lvl0%22%5D&tagFilters=","index":"prod_blogOriverkdev","processingTimeMS":1}]}

    results.forEach(result => {
      const item = document.createElement('div');
      item.classList.add('search-item');

      const anchor = document.createElement('a');
      anchor.setAttribute('href', `${baseUrl}/posts/${result.id}`);
      item.appendChild(anchor);

      const timeContainer = document.createElement('div')
      timeContainer.classList.add('datetime')
      timeContainer.textContent = 'created at '
      anchor.appendChild(timeContainer)
      

      const date = document.createElement('time');
      date.setAttribute('datetime', result.create);
      date.textContent = result.create;
      timeContainer.appendChild(date);

      const tags = document.createElement('div');
      tags.classList.add('tags');
      result.tags.forEach(t => {
        const tag = document.createElement('span');
        tag.textContent = t;
        tags.appendChild(tag);
      })
      anchor.appendChild(tags);

      const title = document.createElement('div');
      title.classList.add('title');
      title.textContent = result.title;
      anchor.appendChild(title);

      // const img = document.createElement('amp-img');
      // img.setAttribute('src', result.image);
      // img.setAttribute('width', 220);
      // img.setAttribute('height', 151);
      // img.setAttribute('layout', 'intrinsic');
      // item.appendChild(img);

      newSearchResults.appendChild(item);
    });
  }
  document.body.replaceChild(newSearchResults, previousSearchResults);
}

async function runSearch(query) {
  const headers = {
    accept: 'application/json',
    Referer: referer,
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