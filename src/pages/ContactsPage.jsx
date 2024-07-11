import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import FormAddContact from 'components/FormAddContact/FormAddContact';

const ContactsPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        p: 2,
      }}
    >
      <Grid container spacing={4}>
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
    </Box>
  );
};

export default ContactsPage;
