const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> console.log("MOngodb Connected"));

// Post model
const Post = mongoose.model('Post', {
  name: String,
  msg: String,
  rating:Number
});
const User = mongoose.model('User', {
  email:String
});

// Routes
app.get('/api/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.post('/api/posts', async (req, res) => {
  const { name, msg,rating } = req.body;
  const anonymous = "anonymous"
  const post = new Post({ name : anonymous, msg,rating });
  await post.save();
  res.json(post);
});
app.post('/api/email', async (req, res) => {
  const { email } = req.body;
  const user = new User({ email });
  await user.save();
  res.json(user);
});
app.post('/chatbot', (req, res) => {
    const { message } = req.body;
    let response;
    const lowercaseMessage = message.toLowerCase();
  
    const responsePatterns = [
      { pattern: 'hello', reply: 'Hi there!' },
      { pattern: 'hi', reply: 'Hello!' },
      { pattern: 'how are you', reply: "I'm just a bot, but I'm doing well!" },
      { pattern: 'fuck', reply: "I'm sorry, I cannot respond to offensive language." },
      { pattern: 'what is your name', reply: "I'm a chatbot, you can call me HopeAI" },
      { pattern: 'who created you', reply: "I was created by Pravin" },
      { pattern: 'who designed you', reply: "I was Designed by Vansh" },
      { pattern: 'what can you do', reply: "I can answer questions, provide information, and engage in conversation." },
      { pattern: 'where are you from', reply: "I exist in the digital realm, so I don't have a physical location." },
      { pattern: 'tell me a joke', reply: "Why don't scientists trust atoms? Because they make up everything!" },
  ];
  
    const matchedPattern = responsePatterns.find(({ pattern }) => lowercaseMessage.includes(pattern));
    if (matchedPattern) {
      response = matchedPattern.reply;
    } else {
      response = "I'm sorry, I don't understand.";
    }
    setTimeout(() => {
      res.json(response);
    }, 1000);
  });


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
