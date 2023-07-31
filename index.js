const fs = require('fs');
const https = require('https');
const express = require('express');
const kyber = require('crystals-kyber'); // Import the Kyber PQC library

const app = express();
const port = 443; // The default port for HTTPS is 443

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

// Store the blocklist in memory on the server
let blocklist = [];

app.use(express.json()); // Middleware to parse JSON data from the request body

// Create an API endpoint to receive the encrypted blocklist data from the client
app.post('/updateBlocklist', async (req, res) => {
  try {
    const { publicKey, encryptedBlocklist } = req.body; // The public key and encrypted blocklist data sent from the client

    // Generate the symmetric key using the received public key
    let ss_d = kyber.Decapsulate1024(encryptedBlocklist, publicKey);

    // Decrypt the blocklist array using Kyber PQC decryption
    const decryptedBlocklist = kyber.Decrypt1024_BlockList(encryptedBlocklist, ss_d);

    // Update the blocklist on the server
    blocklist = decryptedBlocklist;

    // Store the decrypted blocklist in the 'blocklist.json' file
    fs.writeFileSync('blocklist.json', JSON.stringify(decryptedBlocklist, null, 2));

    res.json({ success: true });
  } catch (err) {
    console.error('Error while updating blocklist:', err);
    res.status(500).json({ error: 'Error while updating blocklist' });
  }
});

// Load the blocklist from the 'blocklist.json' file on server startup
fs.readFile('blocklist.json', 'utf8', (err, data) => {
  if (!err) {
    try {
      blocklist = JSON.parse(data);
    } catch (parseError) {
      console.error('Error parsing blocklist data:', parseError);
    }
  } else {
    console.error('Error reading blocklist file:', err);
  }
});

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`HTTPS server is running on port ${port}`);
});

// Testing the Kyber PQC library
kyber.Test1024();
