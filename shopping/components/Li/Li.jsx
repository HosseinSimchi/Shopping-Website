/** @jsx jsx */
import React from 'react';

import {css, jsx} from '@emotion/react';


const Li = ({children,listStyle='', margin='', fontSize='', fontWeight='', textAlign='', width='',
              resFont9='', resMargin9='', resFont4='', resFont5='',resFont7='',resMargin4='',resMargin5='',resMargin7=''}) => {

  return (
<li css={css`
      width: ${width};
      margin : ${margin};
      list-style : ${listStyle};
      font-size : ${fontSize};
      font-weight : ${fontWeight};
      text-align : ${textAlign};
      cursor : pointer;
      &:hover {
        opacity : "0.4";
      };
      @media screen and (max-width: 992px) {
        font-size : ${resFont9};
        margin : ${resMargin9};
      };
      @media screen and (max-width: 768px) {
        font-size : ${resFont7};
        margin : ${resMargin7};
      };
      @media screen and (max-width: 576px) {
        font-size : ${resFont5};
        margin : ${resMargin5};
      };
      @media screen and (max-width: 400px) {
        font-size : ${resFont4};
        margin : ${resMargin4};
      };
    `}>
      {children}
    </li>
  )
}


export default Li;












