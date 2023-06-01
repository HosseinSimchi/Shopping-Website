import React from 'react';

import {css, jsx} from '@emotion/react';

const Unorderlist = ({children, margin=''}) => {

  return (
    <ul css={css`
      display : flex;
      list-style : none;
      margin : ${margin};
    `}>
        {children}
    </ul>
  )
}

export default Unorderlist;




