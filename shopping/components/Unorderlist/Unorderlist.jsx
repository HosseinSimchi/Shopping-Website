import React from 'react';

import {css, jsx} from '@emotion/react';

const Unorderlist = ({children, margin='', flexWrap='', justifyContent='', width=''}) => {

  return (
    <ul css={css`
      width: ${width};
      display : flex;
      list-style : none;
      justify-content : ${justifyContent};
      margin : ${margin};
      flex-wrap : ${flexWrap};
      @media screen and (max-width: 768px) {
        margin : 0 25px;
      }
      @media screen and (max-width: 576px) {
        margin : 0 20px;
      }
      @media screen and (max-width: 400px) {
        margin : 0 5px;
      }
    `}>
        {children}
    </ul>
  )
}

export default Unorderlist;




