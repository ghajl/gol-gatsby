import React from 'react';
import PropTypes from 'prop-types';

const YouTubePlayer = ({
  videoId, autoplay, showinfo, rel, title,
}) => {
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&rel=${rel}&showinfo=${showinfo}`;
  return (
    <div>
      <iframe
        title={title}
        type="text/html"
        width="100%"
        height="390px"
        src={src}
        frameBorder="0"
      />
    </div>
  );
};

export default YouTubePlayer;

YouTubePlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
  autoplay: PropTypes.number,
  showinfo: PropTypes.number.isRequired,
  rel: PropTypes.number,
  title: PropTypes.string.isRequired,
};

YouTubePlayer.defaultProps = {
  autoplay: 0,
  rel: 1,
};
