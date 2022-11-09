import { TFetch, TResponse } from './type';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export const cleanQueryToString = (params: Record<string, unknown>) => {
  const obj = { ...params };
  for (const propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') delete obj[propName];
  }

  return Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${params[key]}`)
    .join('&');
};

const fetchService = ({ path, method, query, body }: TFetch) => {
  return fetch(`${BASE_URL}${path}?${query ? cleanQueryToString(query) : ''}`, {
    method: method,
    body: body,
  })
    .then((res) => res.json())
    .catch((err) => {
      throw new Error('err');
    });
};

export const getPokemonList = (): Promise<TResponse> => {
  return fetchService({
    path: 'pokemon',
    method: 'GET',
    query: {
      limit: 20,
    },
  });
};
