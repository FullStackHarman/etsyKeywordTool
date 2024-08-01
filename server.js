// Description: This is the server file for Etsy Project.
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
})

