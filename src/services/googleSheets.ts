import { google } from 'googleapis';
import { Course, Category } from '../types';

export class GoogleSheetsService {
  private sheets = google.sheets('v4');
  private auth: any;

  private mockCategories: Category[] = [
    { id: '1', name: 'Scrum Fundamentals' },
    { id: '2', name: 'Advanced Scrum' },
    { id: '3', name: 'Agile Leadership' },
    { id: '4', name: 'Product Management' },
    { id: '5', name: 'Team Collaboration' }
  ];

  private mockCourses: Course[] = [
    {
      id: '1',
      title: 'Introduction to Scrum',
      description: 'Learn the fundamentals of Scrum methodology, including roles, events, and artifacts. Perfect for beginners looking to understand agile project management.',
      category_id: '1',
      modules: 'Module 1: Scrum Overview, Module 2: Scrum Roles, Module 3: Sprint Planning, Module 4: Daily Standups, Module 5: Sprint Review & Retrospective'
    },
    {
      id: '2',
      title: 'Certified ScrumMaster (CSM)',
      description: 'Comprehensive certification course for aspiring ScrumMasters. Covers facilitation, coaching, and servant leadership principles.',
      category_id: '1',
      modules: 'Module 1: Scrum Framework, Module 2: ScrumMaster Role, Module 3: Facilitation Techniques, Module 4: Coaching Skills, Module 5: Certification Prep'
    },
    {
      id: '3',
      title: 'Product Owner Essentials',
      description: 'Master the art of product ownership with this comprehensive course covering backlog management, stakeholder communication, and value delivery.',
      category_id: '4',
      modules: 'Module 1: Product Vision, Module 2: Backlog Management, Module 3: User Stories, Module 4: Stakeholder Management, Module 5: Value Delivery'
    },
    {
      id: '4',
      title: 'Advanced Scrum Techniques',
      description: 'Deep dive into advanced Scrum practices including scaling frameworks, metrics, and continuous improvement techniques for experienced practitioners.',
      category_id: '2',
      modules: 'Module 1: Scaling Scrum, Module 2: Advanced Metrics, Module 3: Continuous Improvement, Module 4: Team Performance, Module 5: Enterprise Agile'
    },
    {
      id: '5',
      title: 'Agile Team Building',
      description: 'Focus on building high-performing agile teams through effective communication, collaboration, and conflict resolution strategies.',
      category_id: '5',
      modules: 'Module 1: Team Dynamics, Module 2: Communication Skills, Module 3: Conflict Resolution, Module 4: Trust Building, Module 5: Performance Optimization'
    },
    {
      id: '6',
      title: 'Scrum for Distributed Teams',
      description: 'Learn how to implement Scrum effectively in remote and distributed team environments with modern tools and techniques.',
      category_id: '2',
      modules: 'Module 1: Remote Collaboration, Module 2: Digital Tools, Module 3: Communication Strategies, Module 4: Time Zone Management, Module 5: Virtual Ceremonies'
    },
    {
      id: '7',
      title: 'Agile Leadership Masterclass',
      description: 'Develop leadership skills specific to agile environments, focusing on servant leadership, change management, and organizational transformation.',
      category_id: '3',
      modules: 'Module 1: Servant Leadership, Module 2: Change Management, Module 3: Organizational Culture, Module 4: Transformation Strategies, Module 5: Leadership Assessment'
    },
    {
      id: '8',
      title: 'Scrum Metrics and KPIs',
      description: 'Learn to measure and improve team performance using agile metrics, burndown charts, velocity tracking, and other key performance indicators.',
      category_id: '2',
      modules: 'Module 1: Agile Metrics Overview, Module 2: Velocity and Burndown, Module 3: Quality Metrics, Module 4: Team Health, Module 5: Reporting and Dashboards'
    },
    {
      id: '9',
      title: 'User Story Writing Workshop',
      description: 'Master the art of writing effective user stories, acceptance criteria, and managing product backlogs for maximum value delivery.',
      category_id: '4',
      modules: 'Module 1: Story Structure, Module 2: Acceptance Criteria, Module 3: Story Splitting, Module 4: Prioritization, Module 5: Backlog Refinement'
    }
  ];

  constructor(apiKey: string, private spreadsheetId: string) {
    this.auth = apiKey;
    google.options({ auth: apiKey });
    console.log('GoogleSheetsService initialized - will use mock data for demo');
  }

  // Mock data methods (currently used)
  async getMockCourses(): Promise<Course[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return [...this.mockCourses];
  }

  async getMockCategories(): Promise<Category[]> {
    await new Promise(resolve => setTimeout(resolve, 50));
    return [...this.mockCategories];
  }

  async getMockCoursesWithCategories(): Promise<Course[]> {
    const [courses, categories] = await Promise.all([
      this.getMockCourses(),
      this.getMockCategories(),
    ]);

    const categoryMap = new Map(categories.map(cat => [cat.id, cat.name]));

    return courses.map(course => ({
      ...course,
      categoryName: categoryMap.get(course.category_id) || 'Uncategorized',
    }));
  }

  // Google Sheets API methods (for future use)
  async getCourses(): Promise<Course[]> {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: 'Courses!A:E',
      });

      const rows = response.data.values || [];
      if (rows.length === 0) return [];

      const courses = rows.slice(1).map((row): Course => ({
        id: row[0] || '',
        title: row[1] || '',
        description: row[2] || '',
        category_id: row[3] || '',
        modules: row[4] || '',
      }));

      return courses;
    } catch (error) {
      console.error('Error fetching courses:', error);
      return [];
    }
  }

  async getCategories(): Promise<Category[]> {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: 'Categories!A:B',
      });

      const rows = response.data.values || [];
      if (rows.length === 0) return [];

      const categories = rows.slice(1).map((row): Category => ({
        id: row[0] || '',
        name: row[1] || '',
      }));

      return categories;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  async getCoursesWithCategories(): Promise<Course[]> {
    // Currently using mock data - change to real API calls when ready
    return this.getMockCoursesWithCategories();
    
    // Uncomment below to use Google Sheets API instead:
    // const [courses, categories] = await Promise.all([
    //   this.getCourses(),
    //   this.getCategories(),
    // ]);
    // 
    // const categoryMap = new Map(categories.map(cat => [cat.id, cat.name]));
    // 
    // return courses.map(course => ({
    //   ...course,
    //   categoryName: categoryMap.get(course.category_id) || 'Uncategorized',
    // }));
  }
}