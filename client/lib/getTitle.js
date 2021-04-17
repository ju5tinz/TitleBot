import { API_URL } from './constants'

export const getTitle = async (url) => {
  try{
    const response = await fetch(
      API_URL + "/title",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({url})
      }
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
}