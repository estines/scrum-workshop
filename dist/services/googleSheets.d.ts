import { Course, Category } from '../types';
export declare class GoogleSheetsService {
    private spreadsheetId;
    private sheets;
    private auth;
    private mockCategories;
    private mockCourses;
    constructor(apiKey: string, spreadsheetId: string);
    getMockCourses(): Promise<Course[]>;
    getMockCategories(): Promise<Category[]>;
    getMockCoursesWithCategories(): Promise<Course[]>;
    getCourses(): Promise<Course[]>;
    getCategories(): Promise<Category[]>;
    getCoursesWithCategories(): Promise<Course[]>;
}
