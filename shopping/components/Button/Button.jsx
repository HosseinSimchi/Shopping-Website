import React from "react";


import {css, jsx} from '@emotion/react';

const Button = ({children, href='#', fontSize='', responsiveFont4='10px', responsiveFont5='', responsivePad4=''}) => {

  return (
    <a href={`${href}`} css={css`
      font-size:${fontSize};
      text-decoration : none;
      color : black;
      opacity : 0.6;
      cursor : pointer;
      border : 2px dotted black;
      border-radius : 10px;
      padding : 5px;
      &:hover {
        opacity : 1;
      }

      @media screen and (max-width: 576px) {
        font-size : ${responsiveFont5};
      }

      @media screen and (max-width:400px){
        font-size : ${responsiveFont4};
        padding : ${responsivePad4};
      }
    `}>
      {children}
    </a>
  )
}

export default Button;









