// @ts-check

import React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {Object} Post
 * @property {number} id - The unique identifier for each post.
 * @property {string} title - The title of the post.
 * @property {string} body - The body of the post.
 */

/**
 * Component to display a list of blog posts.
 * @param {{ posts: Post[] }} props - List of blog posts to display.
 * @returns {JSX.Element} A rendered list of blog posts.
 */
const PostsList = ({ posts }) => (
  <ul>
    {posts.map(({ id, title, body }) => (
      <li key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
      </li>
    ))}
  </ul>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostsList;
