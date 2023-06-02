import React from "react";

import {css, jsx} from '@emotion/react';

const H1 = ({children, fontSize='', marginButton='', opacity='', marginTop=''}) => {

  return(
    <h1 css={css`
      font-size : ${fontSize};
      margin-bottom : ${marginButton};
      opacity : ${opacity};
      margin-top : ${marginTop};
      @media screen and (max-width: 400px) {
        font-size : 20px;
      };
    `}>
      {children}
    </h1>
  )
}

export default H1;








