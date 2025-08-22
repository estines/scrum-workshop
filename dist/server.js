"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const googleSheets_1 = require("./services/googleSheets");
const courses_1 = require("./routes/courses");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// View engine setup
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../views'));
// Initialize Google Sheets service
const sheetsService = new googleSheets_1.GoogleSheetsService(process.env.GOOGLE_SHEETS_API_KEY || '', process.env.GOOGLE_SHEET_ID || '');
// Routes
app.use('/courses', (0, courses_1.createCoursesRouter)(sheetsService));
// Home route
app.get('/', async (req, res) => {
    try {
        const courses = await sheetsService.getCoursesWithCategories();
        res.render('pages/index', {
            title: 'Scrum Academy - Master Scrum & Agile',
            courses,
            error: null
        });
    }
    catch (error) {
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
//# sourceMappingURL=server.js.map