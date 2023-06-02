import React from "react";

import {css, jsx} from "@emotion/react";

const H4 = ({children}) => {

  return (
    <h4 css={css`
      @media screen and (max-width: 400px) {
        font-size : 8px;
      }
    `}>
      {children}
    </h4>
  )
}

export default H4;


