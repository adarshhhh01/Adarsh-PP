import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import Contact from './models/Contact.js'

const app = express()
const port = process.env.PORT || 5000

app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(',') || true }))
app.use(express.json({ limit: '32kb' }))

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, database: mongoose.connection.readyState === 1 ? 'connected' : 'not-configured' })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ message: 'Name, email, and message are required.' })
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' })
  }

  try {
    if (mongoose.connection.readyState === 1) await Contact.create({ name, email, message })
    else console.info('Contact received without MongoDB configured:', { name, email })
    return res.status(201).json({ message: 'Thanks — your message is on its way.' })
  } catch (error) {
    console.error('Unable to store contact:', error)
    return res.status(500).json({ message: 'Message could not be sent. Please use WhatsApp instead.' })
  }
})

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.info('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection failed:', error.message))
} else {
  console.info('MONGODB_URI not set — contact submissions will be logged only.')
}

app.listen(port, () => console.info(`Portfolio API listening on http://localhost:${port}`))
