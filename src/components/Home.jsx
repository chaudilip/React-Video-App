import { Box, Container, Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import { Image } from '@chakra-ui/image';

const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%, -50%)",
    textTransform:"uppercase",
    p:"4",
    size:['4xl','4xl'],
}
const imageOptions = {
  h:'full',
  w:'full',
  objectFit:"cover",
}

function Home() {
    const MyCarousel = () => (
        <Carousel
          autoPlay
          infiniteLoop
          interval={1000}
          swipeable={false}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
        >
            <Box w={'full'} h={'100vh'}>
            <Image src={img1} {...imageOptions}/>
            <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch The Future</Heading>
            </Box>
            <Box w={'full'} h={'100vh'}>
            <Image src={img2} {...imageOptions}/>
            <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>Future is Gaming</Heading>
            </Box>
            <Box w={'full'} h={'100vh'}>
            <Image src={img3} {...imageOptions}/>
            <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>Gaming on Console</Heading>
            </Box>
            <Box w={'full'} h={'100vh'}>
            <Image src={img4} {...imageOptions}/>
            <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>Learn With Videos</Heading>
            </Box>
        </Carousel>
      );
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
            Services
        </Heading>
        <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']}>
            <Image src={img5}   h={['40','400']} filter={'hue-rotate(-130deg)'} />
            <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil nam est voluptatum atque possimus rem, eveniet libero qui, vel obcaecati aperiam perferendis fugit cum maiores facere natus sequi doloremque deleniti dolorum tenetur nisi porro laudantium! Aut quisquam non, repellendus tenetur at adipisci quibusdam deserunt nostrum suscipit. Ducimus, maiores? Vero labore cumque qui doloribus veritatis officiis magnam provident odio. Enim iusto at non sint corporis rem numquam blanditiis quo cupiditate, odio officia rerum in quod, laborum illum perspiciatis earum, natus asperiores placeat nobis excepturi. Voluptates ea fugiat rem consequatur blanditiis magnam et ducimus facere, sequi, dicta incidunt praesentium, enim excepturi quisquam nostrum nihil. Nulla quae nesciunt magnam expedita veritatis aspernatur laudantium incidunt, deserunt iusto voluptate, distinctio qui iure nobis illum perferendis.
            </Text>
        </Stack>
      </Container>
    </Box>
  );

 
}

export default Home;
