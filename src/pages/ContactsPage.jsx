import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  CssBaseline,
} from '@mui/material';
import FormAddContact from 'components/FormAddContact/FormAddContact';

const ContactsPage = () => {
  return (
    <>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          justifyContent: 'space-between',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ paddingTop: 4, paddingBottom: 2, flexGrow: 1 }}
        >
          <Grid container spacing={4} direction={{ xs: 'column', md: 'row' }}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                  Phonebook
                </Typography>
                <FormAddContact />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                  Contacts
                </Typography>
                <Filter />
                <ContactList />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Box
          component="footer"
          sx={{ py: 3, textAlign: 'center', bgcolor: '#f3eeea' }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} My Contacts App
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ContactsPage;
