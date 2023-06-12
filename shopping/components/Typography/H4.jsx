/** @jsx */

import {css} from "@emotion/react";

const H4 = ({children, fontSize='', marginBottom='', responsiveFont4='12px', responsiveFont5='', responsiveFont7=''}) => {

  return (
    <h4 css={css`
      font-size: ${fontSize};
      margin-bottom: ${marginBottom};
      @media screen and (max-width: 768px) {
        font-size :${responsiveFont7};
      }
      @media screen and (max-width: 576px) {
        font-size : ${responsiveFont5};
      }
      @media screen and (max-width: 400px) {
        font-size : ${responsiveFont4};
      }
    `}>
      {children}
    </h4>
  )
}

export default H4;


