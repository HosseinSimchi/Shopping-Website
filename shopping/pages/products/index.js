import React from 'react';
import { Header,Footer } from '../importedFiles';

import dataJson from '../../data.json';
import { Section, Container, Card, Image, H4, P, Button } from '@/containers/importedFiles';

const Products = () => {
  
  return (
    <>
      <Header topic="محصولات ما" content= "می توانید بر روی هر یک از محصولات زیر کلیک کنید تا جزئیات هر یک را مشاهده کنید"/>
      <Section marginTop='10vh' width='100%' height='800px' backgroundColor='rgba(0,0,0,0.1)' responsiveHeight4='450px' responsiveHeight5='600px'>
        <Container paddingTop='10vh' margin='70px auto' flexWrap='wrap' justifyContent='center' responsiveMargin4='30px auto' responsiveMargin5='50px auto' >
            {dataJson.map((item, index) => (
                <Card width='20%' height='300px' resWidth7='150px' resHeight7='200px' resWidth5='100px' resHeight5='180px' resWidth4='90px' resHeight4='100px'>
                  <Image src={`${item.ImgUTL}`} alt='ImageProduct' width="100px" height='100px' resWidth9='80px' resHeight9='80px' resWidth7='60px' resHeight7='60px' resWidth5='50px' resHeight5='50px' resWidth4='30px' resHeight4='30px'/>
                  <H4 fontSize='14px' responsiveFont4='5px' responsiveFont5='8px' responsiveFont7='10px'>{item.name}</H4>
                  <P margin='1px 0 2.5px 0' fontSize='12px' responsiveFont4='3px' responsiveFont5='6px' responsiveFont7='8px' responsiveFont9='8px'>{item.description}</P>
                  <Button href={`/products/product/${index+1}`}  fontSize='12px' responsiveFont5='7px' responsiveFont4='6px' responsivePad4='2px'>مشاهده محصول</Button>
                </Card>
            ))}
        </Container>
      </Section>
      <Footer />
    </>
  )
} 

export default Products;




