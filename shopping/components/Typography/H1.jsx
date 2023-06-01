import React from "react";

import {css, jsx} from '@emotion/react';

const H1 = ({children, fontSize='', marginButton='', opacity=''}) => {

  return(
    <h1 css={css`
      font-size : ${fontSize};
      margin-bottom : ${marginButton};
      opacity : ${opacity};
    `}>
      {children}
    </h1>
  )
}

export default H1;








