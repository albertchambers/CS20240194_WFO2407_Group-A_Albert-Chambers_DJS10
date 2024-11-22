// @ts-check

import { useState, useEffect } from 'react';
import { fetchPosts } from './services/api';
import PostsList from './components/PostsList';
import ErrorMessage from './components/ErrorMessage';
import './app.css'; // Import App-specific styles

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchPosts();
        setPosts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

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