const fs = require('fs-extra')
const path = require('path');

// Copy README.md
const srcReadmePath = path.resolve(__dirname, '../../../README.md');
const destReadmePath = path.resolve(__dirname, '../README.md');

fs.readFile(srcReadmePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const updatedData = data.replace(
    '<img src="./images/gif-demo.gif" />',
    'Demo gif can be seen on the GitHub README'
  );

  fs.writeFile(destReadmePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Successfully copied README');
    }
  });
});

// Copy LICENSE
const srcLicensePath = path.resolve(__dirname, '../../../LICENSE');
const destLicensePath = path.resolve(__dirname, '../LICENSE');

fs.copyFile(srcLicensePath, destLicensePath, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Successfully copied LICENSE');
  }
});

// Copy schema
const srcDir = path.resolve(__dirname, '../schemas')
const distDir = path.resolve(__dirname, '../dist/schemas')

fs.copy(srcDir, distDir, err => {
  if (err) {
    console.error('Error copying schema:', err)
  } else {
    console.log('Successfully copied SCHEMA');
  }
})
