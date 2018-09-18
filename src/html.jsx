/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.PureComponent {
  render() {
    const {
      htmlAttributes, headComponents, bodyAttributes, preBodyComponents, body, postBodyComponents,
    } = this.props;
    return (
      <html lang="en" {...htmlAttributes}>
        <head>
          {headComponents}
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.shape({}),
  headComponents: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({}),
    ),
  ).isRequired,
  bodyAttributes: PropTypes.shape({}),
  preBodyComponents: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  body: PropTypes.string.isRequired,
  postBodyComponents: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

HTML.defaultProps = {
  htmlAttributes: {},
  bodyAttributes: {},
};
