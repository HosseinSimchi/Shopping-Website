import React from "react";

import {css, jsx} from '@emotion/react';

const P = ({children, fontSize='', fontWeight='', opacity='', lineHeight='', margin='', width=''}) => {

  return (
    <p css={css`
      font-size : ${fontSize};
      font-weight : ${fontWeight};
      opacity : ${opacity};
      margin : ${margin};
      width : ${width};
      line-height : ${lineHeight};
      @media screen and (max-width: 768px) {
        font-size : 15px;
      };
      @media screen and (max-width: 400px) {
        top : 10%;
        bottom:10%;
        font-size : 8px;
      };
    `}>
      {children}
    </p>
  )
}


export default P;





