import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';
import { marked } from 'marked';
import DownloadIcon from '@mui/icons-material/Download';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function ReadmePreview({ markdown }) {
  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = markdown;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

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
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
       
        <Button
          variant="outlined"
          startIcon={<ContentCopyIcon />}
          onClick={handleCopy}
          size="large"
          sx={{ minWidth: 200 }}
        >
          Copy README.md
        </Button>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={handleDownload}
          size="large"
          sx={{ minWidth: 200 }}
        >
          Download README.md
        </Button>
      </Box>
    </Box>
  );
}

export default ReadmePreview; 