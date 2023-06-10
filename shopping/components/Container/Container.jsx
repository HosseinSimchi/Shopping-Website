
import React from 'react';

import { css,jsx } from '@emotion/react'


const Container = ({width="80%",height="100%",children, position= "", flexDirection = ""
                    , justifyContent="", alignItems="", responsiveMargin4='',  responsiveMargin5='',
                      flexWrap='', margin='auto', paddingTop=''}) => {
  return (
    <div css={css`
        position : ${position};
        display : flex;
        flex-direction : ${flexDirection};
        flex-wrap : ${flexWrap};
        width : ${width};
        height : ${height};
        margin : ${margin};
        justify-content : ${justifyContent};
        align-items : ${alignItems};
        padding-top : ${paddingTop};
        @media screen and (max-width: 576px) {
          margin : ${responsiveMargin5};
        }
        @media screen and (max-width: 400px) {
          margin : ${responsiveMargin4};
        }
    `}>
      {children}
    </div>
  )
}


export default Container;

