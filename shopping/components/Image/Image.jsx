
import React from 'react';

import {css, jsx} from '@emotion/react';

const Image = ({src, size, alt, height='', resWidth4='30px', resHeight4='30px'
                , resWidth5='', resHeight5=''
                , resWidth7='', resHeight7=''
                , resWidth9='', resHeight9=''
                , margin='', borderRadius=''}) => {

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
        @media screen and (max-width: 992px) {
          width : ${resWidth9};
          height : ${resHeight9};
        };
        @media screen and (max-width: 768px) {
          width : ${resWidth7};
          height : ${resHeight7};
        };
        @media screen and (max-width: 576px) {
          width : ${resWidth5};
          height : ${resHeight5};
        };
        @media screen and (max-width: 400px) {
          width : ${resWidth4};
          height : ${resHeight4};
        };
    `} src={`${src}`}  alt={`${alt}`}/>
  )
}

export default Image;












