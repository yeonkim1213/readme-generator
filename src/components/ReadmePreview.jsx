import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { marked } from 'marked';

function ReadmePreview({ markdown }) {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Preview
      </Typography>
      <Paper
        sx={{
          p: 3,
          bgcolor: '#ffffff',
          '& img': {
            maxWidth: '100%',
            height: 'auto',
          },
          '& a': {
            color: '#2196f3',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
          '& h1, & h2, & h3': {
            color: '#1976d2',
          },
          '& code': {
            bgcolor: '#f5f5f5',
            p: 0.5,
            borderRadius: 1,
          },
          '& pre': {
            bgcolor: '#f5f5f5',
            p: 2,
            borderRadius: 1,
            overflowX: 'auto',
          },
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: marked(markdown, {
              breaks: true,
              gfm: true,
            }),
          }}
        />
      </Paper>
    </Box>
  );
}

export default ReadmePreview; 