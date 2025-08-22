import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleSheetsService } from './services/googleSheets';
import { createCoursesRouter } from './routes/courses';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Initialize Google Sheets service
const sheetsService = new GoogleSheetsService(
  process.env.GOOGLE_SHEETS_API_KEY || '',
  process.env.GOOGLE_SHEET_ID || ''
);

// Routes
app.use('/courses', createCoursesRouter(sheetsService));

// Home route
app.get('/', async (req, res) => {
  try {
    const courses = await sheetsService.getCoursesWithCategories();
    res.render('pages/index', {
      title: 'Scrum Academy - Master Scrum & Agile',
      courses,
      error: null
    });
  } catch (error) {
    console.error('Error loading home page:', error);
    res.render('pages/index', {
      title: 'Scrum Academy - Master Scrum & Agile',
      courses: [],
      error: 'Failed to load courses. Please try again later.'
    });
  }
});

// Error handling middleware
app.use((req, res) => {
  res.status(404).render('pages/error', {
    title: 'Page Not Found',
    message: 'The page you are looking for does not exist.'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the application`);
});