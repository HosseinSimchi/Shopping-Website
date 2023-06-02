import React from 'react';

import {css, jsx} from '@emotion/react';


const Li = ({children, margin='', fontSize='', fontWeight='', textAlign='', width='', name}) => {

  return (

    <>
      {name === "navbar" ? (<li css={css`
      width: ${width};
      margin : ${margin};
      font-size : ${fontSize};
      font-weight : ${fontWeight};
      text-align : ${textAlign};
      cursor : pointer;
      &:hover {
        opacity : "0.4";
      }
      @media screen and (max-width: 768px) {
        font-size : 15px;
        margin : 0 10px;
      }
      @media screen and (max-width: 576px) {
        font-size : 10px;
        margin : 0 5px;
      }
      @media screen and (max-width: 400px) {
        font-size : 8px;
        margin : 0 2px;
      }
    `}>
      {children}
    </li>) : (<li css={css`
      width: ${width};
      margin : ${margin};
      font-size : ${fontSize};
      font-weight : ${fontWeight};
      text-align : ${textAlign};
      cursor : pointer;
      &:hover {
        opacity : "0.4";
      }
    `}>
      {children}
    </li>)}
    </>
  )
}


export default Li;












