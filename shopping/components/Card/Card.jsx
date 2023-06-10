import React from 'react';

import {css} from '@emotion/react';

const Card = ({children, padding='12px', width='20%' , height='315px',
                margin='2px 5px', resWidth4='25%', resWidth5='20%', resWidth7='20%',
                resHeight4='120px',resHeight5='210px',resHeight7='260px'}) => {

  return (
    <div css={css`  
    background-color : rgba(0,0,0,0.3);
    padding : ${padding};
    border : 3px dashed rgba(0,0,0,0.6);
    border-radius : 8px;
    text-align : center;
    width : ${width};
    height : ${height};
    margin : ${margin};
    cursor :pointer;
  
    @media screen and (max-width: 768px) {
      width : ${resWidth7};
      height : ${resHeight7};
    }
    @media screen and (max-width: 576px) {
      width : ${resWidth5};
      height : ${resHeight5};
    }
    @media screen and (max-width: 400px) {
      width : ${resWidth4};
      height : ${resHeight4};
    }
  `}>
      {children}
    </div>
  )
}

export default Card;








