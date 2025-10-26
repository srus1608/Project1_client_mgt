const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const clientRoutes = require('./routes/clients');
const meetingRoutes = require('./routes/meetings');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/clients', clientRoutes);
app.use('/api/meetings', meetingRoutes);

app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});
