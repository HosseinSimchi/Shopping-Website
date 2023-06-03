import React from "react";

import {css, jsx} from '@emotion/react';

const Section = ({children, marginTop="", height="", position="",
                  width="", textAlign="",
                  backgroundColor='',
                  backgroundImage="", backgroundAttachment="",
                  backgroundSize="", backgroundRepeat="",
                  top="", right="", bottom="", left="", responsiveHeight4="", responsiveHeight5="",
                  responsiveHeight7=''}) => {

  return (
    <section css={css`
      height: ${height};
      margin-top: ${marginTop};
      position : ${position};
      width: ${width};
      text-align: ${textAlign};
      background-color: ${backgroundColor};
      background-image: ${backgroundImage};
      background-size : ${backgroundSize};
      background-repeat : ${backgroundRepeat};
      background-attachment: ${backgroundAttachment};
      position : ${position};
      top: ${top};
      right: ${right};
      left: ${left};
      bottom: ${bottom};
      @media screen and (max-width: 768px) {
        height : ${responsiveHeight7};
      }
      @media screen and (max-width: 576px) {
        height : ${responsiveHeight5};
      }
      @media screen and (max-width: 400px) {
        height : ${responsiveHeight4};
      }
    `}>
      {children}
    </section>
  )
}

export default Section;


