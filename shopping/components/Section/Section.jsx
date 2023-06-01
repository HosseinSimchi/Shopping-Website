import React from "react";

import {css, jsx} from '@emotion/react';

const Section = ({children, marginTop="", height="", position="",
                  width="", textAlign="",
                  backgroundImage="", backgroundAttachment="",
                  backgroundSize="", backgroundRepeat="",
                  top="", right="", bottom="", left=""}) => {

  return (
    <section css={css`
      height: ${height};
      margin-top: ${marginTop};
      position : ${position};
      width: ${width};
      text-align: ${textAlign};
      background-image: ${backgroundImage};
      background-size : ${backgroundSize};
      background-repeat : ${backgroundRepeat};
      background-attachment: ${backgroundAttachment};
      position : ${position};
      top: ${top};
      right: ${right};
      left: ${left};
      bottom: ${bottom};
    `}>
      {children}
    </section>
  )
}

export default Section;


