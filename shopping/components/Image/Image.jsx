import React from 'react';

import {css, jsx} from '@emotion/react';

const Image = ({src, size, alt}) => {

  return(
    <img css={css`
        width : ${size};
        cursor : pointer;
        &:hover {
          opacity : 0.4;
        }
    `} src={`${src}`}  alt={`${alt}`}/>
  )
}

export default Image;












