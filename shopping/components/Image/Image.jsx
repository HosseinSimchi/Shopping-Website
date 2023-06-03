import React from 'react';

import {css, jsx} from '@emotion/react';

const Image = ({src, size, alt, height='', resWidth4='30px', resHeight4='30px',
                margin='', borderRadius=''}) => {

  return(
    <img css={css`
        width : ${size};
        height : ${height};
        cursor : pointer;
        margin : ${margin};
        border-radius : ${borderRadius};
        &:hover {
          opacity : 0.4;
        }
        @media screen and (max-width: 400px) {
          width : ${resWidth4};
          height : ${resHeight4};
        };
    `} src={`${src}`}  alt={`${alt}`}/>
  )
}

export default Image;












