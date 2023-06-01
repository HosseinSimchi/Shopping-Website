import React from 'react';

import {css, jsx} from '@emotion/react';


const Li = ({children, margin='', fontSize='', fontWeight='', opacity=''}) => {

  return (
    <li css={css`
        margin : ${margin};
        font-size : ${fontSize};
        font-weight : ${fontWeight};
        cursor : pointer;
        &:hover {
          opacity : "0.4";
        }
    `}>
      {children}
    </li>
  )
}

export default Li;












