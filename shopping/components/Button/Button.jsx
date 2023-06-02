import React from "react";


import {css, jsx} from '@emotion/react';

const Button = ({children}) => {

  return (
    <a href="#" css={css`
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
    `}>
      {children}
    </a>
  )
}

export default Button;









