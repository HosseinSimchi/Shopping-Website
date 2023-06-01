import React from "react";

import {css, jsx} from '@emotion/react';


const P = ({children, fontSize='', fontWeight='', opacity=''}) => {

  return (
    <p css={css`
      font-size : ${fontSize};
      font-weight : ${fontWeight};
      opacity : ${opacity};
    `}>
      {children}
    </p>
  )
}


export default P;





