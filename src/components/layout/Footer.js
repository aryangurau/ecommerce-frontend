import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
} from '@mui/icons-material';
import styled from 'styled-components';

const FooterWrapper = styled(Box)`
  background-color: #f5f5f5;
  padding: 80px 0 40px;
  margin-top: 80px;
`;

const SocialIcons = styled(Box)`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

const NewsletterForm = styled(Box)`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              FAVITA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Discover the latest trends in fashion and explore our collection of
              carefully curated pieces that define modern style.
            </Typography>
            <SocialIcons>
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
            </SocialIcons>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Terms & Conditions
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Privacy Policy
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Customer Service
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Shipping Information
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Returns & Exchanges
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Size Guide
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              FAQ
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Subscribe to receive updates, access to exclusive deals, and more.
            </Typography>
            <NewsletterForm>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Enter your email"
                fullWidth
              />
              <Button variant="contained" color="primary">
                Subscribe
              </Button>
            </NewsletterForm>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid #ddd',
            mt: 8,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} FAVITA. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
