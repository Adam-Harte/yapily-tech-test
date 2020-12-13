const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;

const baseUrl = 'http://gateway.marvel.com/v1/public';

const auth = `?apikey=${PUBLIC_KEY}`;

const getRequestUrl = (endpoint: string): string => `${baseUrl}${endpoint}${auth}`;

export const getResponseData = async(endpoint: string) => {
  const response = await fetch(getRequestUrl(endpoint));
  const data = await response.json();

  return data;
}
