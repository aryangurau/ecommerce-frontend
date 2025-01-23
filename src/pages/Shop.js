import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Summer Dress',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    },
    {
      id: 2,
      name: 'Classic Blazer',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac',
    },
    {
      id: 3,
      name: 'Denim Jeans',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
    },
    {
      id: 4,
      name: 'Evening Gown',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1571908598047-29b4b721f973',
    },
    {
      id: 5,
      name: 'Casual T-Shirt',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    },
    {
      id: 6,
      name: 'Winter Coat',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3',
    },
    {
      id: 7,
      name: 'Floral Skirt',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    },
    {
      id: 8,
      name: 'Silk Blouse',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" gutterBottom align="center">
        Shop
      </Typography>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard>
              <CardMedia
                component="img"
                height="280"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${product.price}
                </Typography>
                <Button
                  component={Link}
                  to={`/product/${product.id}`}
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  View Details
                </Button>
              </CardContent>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Shop;
