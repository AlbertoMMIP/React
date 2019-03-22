import React from 'react';

export const Cat = ({mouse}) => {
      return (
        <img src="/dog.png" alt="Img" width="40px" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
} 
