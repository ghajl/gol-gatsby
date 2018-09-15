/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import color from '../util/colors';

const Generation =({generation}) => {
  return (
    <div className="generation">
      {generation}
    <style jsx global>{`
      .generation {
        color: ${color.GENERATION};
        font-size: 1.5em;
        text-align: right;
      }
    `}</style>
    </div>
  );
}
const mapStateToProps = ({generation}) => ({generation});

export default (connect(mapStateToProps)(Generation));

Generation.propTypes = {
  generation: PropTypes.number.isRequired,
};
