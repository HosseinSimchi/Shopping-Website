import React from 'react';

import { css,jsx } from '@emotion/react'


const Container = ({width="80%",height="100%",children, position= "", flexDirection = "", justifyContent="", alignItems="" }) => {
  return (
    <div css={css`
        position : ${position};
        display : flex;
        flex-direction : ${flexDirection};
        width : ${width};
        height : ${height};
        margin : auto;
        justify-content : ${justifyContent};
        align-items : ${alignItems};
    `}>
      {children}
    </div>
  )
}


export default Container;

