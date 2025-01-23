import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Rating,
  TextField,
  Breadcrumbs,
  Link,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProductImage = styled(Box)`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product data (in a real app, this would come from an API)
  const product = {
    id: 1,
    name: 'Summer Dress',
    price: 89.99,
    rating: 4.5,
    reviews: 12,
    description:
      'A beautiful summer dress made from lightweight, breathable fabric. Perfect for warm days and special occasions.',
    details: {
      material: '100% Cotton',
      care: 'Machine wash cold',
      fit: 'Regular fit',
      origin: 'Made in Italy',
    },
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    ],
  };

  const handleQuantityChange = (event) => {
    setQuantity(Math.max(1, parseInt(event.target.value) || 1));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href="/" color="inherit">
          Home
        </Link>
        <Link href="/shop" color="inherit">
          Shop
        </Link>
        <Typography color="text.primary">{product.name}</Typography>
      </Breadcrumbs>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <ProductImage>
            <img src={product.images[0]} alt={product.name} />
          </ProductImage>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            {product.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={product.rating} precision={0.5} readOnly />
            <Typography variant="body2" sx={{ ml: 1 }}>
              ({product.reviews} reviews)
            </Typography>
          </Box>
          <Typography variant="h4" color="primary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>

          <Box sx={{ my: 4 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <TextField
                  type="number"
                  label="Quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  inputProps={{ min: 1 }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={8}>
                <Button variant="contained" color="primary" size="large" fullWidth>
                  Add to Cart
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Product Details
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Material:</strong> {product.details.material}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Care:</strong> {product.details.care}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Fit:</strong> {product.details.fit}
            </Typography>
            <Typography variant="body1">
              <strong>Origin:</strong> {product.details.origin}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
