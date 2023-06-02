import React from 'react';

import {css, jsx} from '@emotion/react';

const Image = ({src, size, alt, height=''}) => {

  return(
    <img css={css`
        width : ${size};
        height : ${height};
        cursor : pointer;
        &:hover {
          opacity : 0.4;
        }
        @media screen and (max-width: 400px) {
          width : 30px;
          height : 30px;
        };
    `} src={`${src}`}  alt={`${alt}`}/>
  )
}

export default Image;












