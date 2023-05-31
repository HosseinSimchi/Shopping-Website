import React from "react";

import {css, jsx} from '@emotion/react';

const Headers = ({children}) => {

  return (
    <header css = {css`
      background-image: url("/Img/header.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 80vh;
      position: relative;
    `}>
        {children}
    </header>
  )
}


export default Headers;


