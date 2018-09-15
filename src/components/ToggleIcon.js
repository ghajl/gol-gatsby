/* eslint-disable */
import React from 'react';

export default ({on, onIcon, offIcon}) => {
  return (
    <React.Fragment >
      {on ? ( onIcon ) : ( offIcon )}
    </React.Fragment>
  );
}  