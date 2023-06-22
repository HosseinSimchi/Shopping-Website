import {jsx} from '@emotion/react';


const Button = ({children, href='#', fontSize='', responsiveFont4='10px', responsiveFont5='', responsivePad4=''}) => {

  return (
    <a href={`${href}`} css={{
      fontSize:`${fontSize}`,
      textDecoration : 'none',
      color : 'black',
      opacity : '0.6',
      cursor : 'pointer',
      border : '2px dotted black',
      borderRadius : '10px',
      padding : '5px',
      '&:hover': {
        opacity : 1,
      },
      '@media screen and (max-width: 576px)': {
        fontSize : `${responsiveFont5}`,
      },

      '@media screen and (max-width:400px)':{
        fontSize : `${responsiveFont4}`,
        padding : `${responsivePad4}`,
      }
    }}>
      {children}
    </a>
  )
}

export default Button;









