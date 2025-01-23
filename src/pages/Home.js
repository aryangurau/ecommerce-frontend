import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from '@mui/material';
import {
  ArrowForward,
  Instagram,
  Facebook,
  Twitter,
  Pinterest,
} from '@mui/icons-material';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = styled(Box)`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const HeroSlide = styled(Box)`
  height: 100vh;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const HeroImage = styled(Box)`
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
  width: 90%;
  max-width: 800px;
`;

const CategorySection = styled(Box)`
  padding: 100px 0;
`;

const CategoryCard = styled(Box)`
  position: relative;
  height: 400px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.7));
  }
`;

const CategoryContent = styled(Box)`
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: white;
  z-index: 1;
`;

const FeaturedSection = styled(Box)`
  padding: 100px 0;
  background-color: #f8f8f8;
`;

const ProductCard = styled(Card)`
  height: 100%;
  box-shadow: none;
  border-radius: 0;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    .MuiCardMedia-root {
      transform: scale(1.05);
    }
  }

  .MuiCardMedia-root {
    transition: transform 0.6s ease;
  }
`;

const InstagramSection = styled(Box)`
  padding: 100px 0;
`;

const InstaGrid = styled(Grid)`
  .insta-item {
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
      .overlay {
        opacity: 1;
      }
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }
`;

const Home = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
      title: 'Summer Collection 2025',
      subtitle: 'Discover the latest trends in fashion',
    },
    {
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
      title: 'New Arrivals',
      subtitle: 'Shop the latest styles',
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Women's Collection",
      items: '150 Products',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
    },
    {
      id: 2,
      name: "Men's Fashion",
      items: '120 Products',
      image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6',
    },
    {
      id: 3,
      name: 'Accessories',
      items: '90 Products',
      image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93',
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Summer Dress',
      price: '$89.99',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    },
    {
      id: 2,
      name: 'Classic Blazer',
      price: '$129.99',
      image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac',
    },
    {
      id: 3,
      name: 'Denim Collection',
      price: '$79.99',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
    },
    {
      id: 4,
      name: 'Evening Gown',
      price: '$199.99',
      image: 'https://images.unsplash.com/photo-1571908598047-29b4b721f973',
    },
  ];

  const instaImages = [
    'https://images.unsplash.com/photo-1483985988355-763728e1935b',
    'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc',
    'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6',
    'https://images.unsplash.com/photo-1485968579580-b6d095142e6e',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae',
  ];

  return (
    <Box>
      <HeroSection>
        <Slider {...sliderSettings}>
          {heroSlides.map((slide, index) => (
            <HeroSlide key={index}>
              <HeroImage>
                <img src={slide.image} alt={slide.title} />
              </HeroImage>
              <HeroContent>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ mb: 4, fontSize: { xs: '1.5rem', md: '2rem' } }}
                >
                  {slide.subtitle}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    padding: '15px 40px',
                    fontSize: '1.1rem',
                    borderRadius: 0,
                  }}
                >
                  Shop Now
                </Button>
              </HeroContent>
            </HeroSlide>
          ))}
        </Slider>
      </HeroSection>

      <CategorySection>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {categories.map((category) => (
              <Grid item xs={12} md={4} key={category.id}>
                <CategoryCard>
                  <img src={category.image} alt={category.name} />
                  <CategoryContent>
                    <Typography variant="h4" gutterBottom>
                      {category.name}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                      {category.items}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="inherit"
                      sx={{ color: 'white', borderColor: 'white' }}
                      endIcon={<ArrowForward />}
                    >
                      Shop Now
                    </Button>
                  </CategoryContent>
                </CategoryCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </CategorySection>

      <FeaturedSection>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 500 }}
          >
            Featured Products
          </Typography>
          <Grid container spacing={4}>
            {featuredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <ProductCard>
                  <Box sx={{ overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="400"
                      image={product.image}
                      alt={product.name}
                    />
                  </Box>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      {product.price}
                    </Typography>
                  </CardContent>
                </ProductCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </FeaturedSection>

      <InstagramSection>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 500 }}>
              Follow Us on Instagram
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              @favita_fashion
            </Typography>
          </Box>
          <InstaGrid container spacing={0}>
            {instaImages.map((image, index) => (
              <Grid item xs={6} md={2} key={index}>
                <Box className="insta-item">
                  <img src={image} alt={`Instagram ${index + 1}`} />
                  <Box className="overlay">
                    <IconButton sx={{ color: 'white' }}>
                      <Instagram />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            ))}
          </InstaGrid>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              mt: 4,
            }}
          >
            <IconButton color="primary">
              <Facebook />
            </IconButton>
            <IconButton color="primary">
              <Instagram />
            </IconButton>
            <IconButton color="primary">
              <Twitter />
            </IconButton>
            <IconButton color="primary">
              <Pinterest />
            </IconButton>
          </Box>
        </Container>
      </InstagramSection>
    </Box>
  );
};

export default Home;
