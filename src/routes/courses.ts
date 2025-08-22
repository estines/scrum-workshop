import { Router, Request, Response } from 'express';
import { GoogleSheetsService } from '../services/googleSheets';

const router = Router();

export function createCoursesRouter(sheetsService: GoogleSheetsService) {
  router.get('/', async (req: Request, res: Response) => {
    try {
      const courses = await sheetsService.getCoursesWithCategories();
      
      res.render('pages/courses', {
        title: 'Scrum Courses',
        courses,
        error: null
      });
    } catch (error) {
      console.error('Error loading courses:', error);
      res.render('pages/courses', {
        title: 'Scrum Courses',
        courses: [],
        error: 'Failed to load courses. Please try again later.'
      });
    }
  });

  return router;
}