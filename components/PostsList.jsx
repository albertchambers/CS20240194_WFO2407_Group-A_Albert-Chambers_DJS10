//@ts-check

import PropTypes from 'prop-types';

/**
 * Component to display a list of blog posts.
 * @param {object[]} posts - List of blog posts to display.
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


// @ts-check