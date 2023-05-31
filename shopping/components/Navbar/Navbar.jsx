import React from 'react';

import {css, jsx} from '@emotion/react';

const Navbar = ({children}) => {

  return (
    <nav css={css`
      width: 100%;
      height: 70px;
      background-color: rgba(0,0,0,.1);

    `}>
      {children}
    </nav>
  )
}

export default Navbar;



