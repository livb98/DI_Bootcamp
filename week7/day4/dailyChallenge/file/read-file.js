import fs from 'fs';

// Read the content from the file
fs.readFile('file-data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('error =>', err);
        return;
    }
    console.log('File content:', data);
});