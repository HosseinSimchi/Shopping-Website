
import React from 'react';

import {css, jsx} from "@emotion/react";

const Layover = ({children}) => {

  return (
    <div css = {css`
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(255,255,255,.8);
    `}>
      {children}
    </div>
  )
}

export default Layover;




