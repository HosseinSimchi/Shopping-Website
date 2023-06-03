import React from "react";

import {css, jsx} from '@emotion/react';

const P = ({children, fontSize='', fontWeight='', opacity='', lineHeight=''
            , margin='', width='', responsiveFont4='9px',responsiveFont5=''
            ,responsiveFont7='15px', responsiveFont9='' , textAlign=''}) => {

  return (
    <p css={css`
      font-size : ${fontSize};
      font-weight : ${fontWeight};
      opacity : ${opacity};
      margin : ${margin};
      width : ${width};
      line-height : ${lineHeight};
      text-align : ${textAlign};
      @media screen and (max-width: 992px) {
        font-size :${responsiveFont9};
      };
      @media screen and (max-width: 768px) {
        font-size : ${responsiveFont7};
      };
      @media screen and (max-width: 576px) {
        font-size : ${responsiveFont5};
      };
      @media screen and (max-width: 400px) {
        top : 10%;
        bottom:10%;
        font-size : ${responsiveFont4};
      };
    `}>
      {children}
    </p>
  )
}


export default P;





