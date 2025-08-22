"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCoursesRouter = createCoursesRouter;
const express_1 = require("express");
const router = (0, express_1.Router)();
function createCoursesRouter(sheetsService) {
    router.get('/', async (req, res) => {
        try {
            const courses = await sheetsService.getCoursesWithCategories();
            res.render('pages/courses', {
                title: 'Scrum Courses',
                courses,
                error: null
            });
        }
        catch (error) {
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
//# sourceMappingURL=courses.js.map