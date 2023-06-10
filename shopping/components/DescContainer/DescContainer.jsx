
import React from 'react';

import {css, jsx} from '@emotion/react';

const DescContainer = ({children}) => {

  return (
    <div css={css`
      position : absolute;
      top : 40%;
      right : 0;
      left : 0;
      text-align : center;
    `}>
      {children}
    </div>
  )
}

export default DescContainer;










