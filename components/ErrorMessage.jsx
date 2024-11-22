import React from 'react'; // Import React to resolve JSX
import PropTypes from 'prop-types';

/**
 * Component to display an error message.
 * @param {string} message - Error message to display.
 * @returns {JSX.Element} A rendered error message.
 */
const ErrorMessage = ({ message }) => (
  <div style={{ color: 'red' }}>
    <p>Error: {message}</p>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
