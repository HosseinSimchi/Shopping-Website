import React from 'react';

import {css, jsx} from '@emotion/react';

const Unorderlist = ({children, margin='', flexWrap=''}) => {

  return (
    <ul css={css`
      display : flex;
      list-style : none;
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




