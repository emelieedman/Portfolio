import fetch from 'isomorphic-unfetch';

function fetchUrl(url) {
  return fetch(url).then(r => r.json());
}

export default fetchUrl;
