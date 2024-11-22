import { useState, useEffect } from 'react';
import fetchPosts from '../services/api';
import PostsList from '../components/PostsList';
import ErrorMessage from '../components/ErrorMessage';
import './app.css';

const App = () => {
 
  const [posts, setPosts] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true); // Initialize as true

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true); // Set loading state to true while fetching
        const data = await fetchPosts(); // Assuming this returns an array of posts
        setPosts(data); // Store fetched posts
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message); // Set error message if fetch fails
        setPosts([]); // Reset posts to empty array in case of error
      } finally {
        setLoading(false); // Set loading to false when fetching completes (success or failure)
      }
    };

    getPosts();
  }, []); // Empty dependency array ensures this effect only runs once

  return (
    <div>
      <h1>Blog Posts</h1>
      {loading && <p className="loading">Loading posts...</p>}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <PostsList posts={posts} />}
    </div>
  );
};

export default App;
