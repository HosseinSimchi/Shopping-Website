import React from "react";

import {css} from "@emotion/react";

const H2 = ({children, fontSize='',margin='', responsiveMargin4=''}) => {

  return (
    <h2 css={css`
      font-size: ${fontSize};
      margin: ${margin};
      @media screen and (max-width: 400px) {
        margin : ${responsiveMargin4};
      }
    `}>
      {children}
    </h2>
  )
}

export default H2;


