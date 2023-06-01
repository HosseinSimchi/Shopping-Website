import React from 'react';

import {css, jsx} from '@emotion/react';


const Flexcontainer = ({children, alignItems='', justifyContent=''}) => {

  return (
    <div css={css`
      display: flex;
      align-items: ${alignItems};
      justify-content: ${justifyContent};
    `}>
      {children}
    </div>
    
  )
}


export default Flexcontainer;











