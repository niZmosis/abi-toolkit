import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Editor from '@monaco-editor/react'
import theme from './theme/theme';
import Controls from './components/Controls';

const App = () => {
  const [input, setInput] = useState('');
  const [output, ] = useState('');

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controls />
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ height: '80vh', p: 2 }}>
              <Editor
                height="100%"
                language="json"
      theme="vs-dark"
                value={input}
                onChange={(value) => handleInputChange(value || '')}
                options={{ automaticLayout: true }}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ height: '80vh', p: 2 }}>
              <Editor

                height="100%"
                language="typescript"
      theme="vs-dark"
                value={output}
                options={{ readOnly: true, automaticLayout: true }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;
