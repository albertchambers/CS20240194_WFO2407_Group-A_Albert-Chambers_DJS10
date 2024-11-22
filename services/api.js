// @ts-check

/**
 * Fetch posts from the JSONPlaceholder API.
 * @returns {Promise<object[]>} A promise resolving to a list of posts.
 * @throws Will throw an error if the API response is not "ok".
 */
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  return response.json();
};

export default fetchPosts