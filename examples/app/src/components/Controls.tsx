import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

const Controls = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="library-label">Library</InputLabel>
        <Select labelId="library-label" label="Library" defaultValue="web3">
          <MenuItem value="ethers_v4">Ethers v4</MenuItem>
          <MenuItem value="ethers_v5">Ethers v5</MenuItem>
          <MenuItem value="ethers_v6">Ethers v6</MenuItem>
          <MenuItem value="web3">Web3</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField label="Library Import Alias" variant="outlined" />
      </FormControl>
      <FormControlLabel control={<Checkbox />} label="Make Output Directory" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Make Index File" />
      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField label="Prefix Name" variant="outlined" />
      </FormControl>
      <FormControlLabel control={<Checkbox />} label="Prefix Types" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Verbatim Module Syntax" />
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="language-label">Language</InputLabel>
        <Select labelId="language-label" label="Language" defaultValue="ts">
          <MenuItem value="ts">TypeScript</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Controls;
