/* eslint-disable */
import React from 'react';

export default ({videoId, autoplay = 0, showinfo, rel = 1}) => {
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&rel=${rel}&showinfo=${showinfo}`;
  return (
    <div >
      <iframe 
        type="text/html" 
        width="100%" 
        height="390px"
        src={src}
        frameBorder="0"
      />
    </div>
  );
}  
