# Scrum Course Website

A modern, server-side rendered course listing website built with Next.js-style architecture. Features comprehensive Scrum and Agile training courses with mock data integration and responsive Bootstrap 5 design.

## 🚀 Features

- **Professional Course Display**: Hero section, category overview, and responsive course cards
- **Interactive Course Details**: Modal popups with comprehensive course information
- **Mock Data Integration**: 9+ realistic Scrum courses across 5 categories
- **Next.js-Style Architecture**: Familiar page router structure for scalability
- **Server-Side Rendering**: SEO-friendly with EJS templates
- **Responsive Design**: Mobile-first Bootstrap 5 with custom animations
- **Modular Components**: Reusable UI sections for easy maintenance

## 🛠️ Tech Stack

- **Backend**: Node.js, TypeScript, Express.js
- **Templates**: EJS with Next.js-inspired structure
- **Styling**: Bootstrap 5 + Bootstrap Icons + Custom CSS
- **Data**: Mock service (Google Sheets API ready)
- **Development**: Nodemon, TypeScript compilation

## 📦 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Visit Application**
   ```
   http://localhost:3000
   ```

4. **Production Build**
   ```bash
   npm run build
   npm start
   ```

## 🏗️ Project Architecture

### Next.js-Style View Structure
```
views/
├── layouts/          # Shared page layouts
│   └── main.ejs      # Complete HTML structure with nav/footer
├── components/       # Reusable UI components  
│   ├── hero-section.ejs      # Hero banner with CTAs
│   ├── category-overview.ejs # Interactive category cards
│   ├── course-listing.ejs    # Course grid with cards
│   └── course-modal.ejs      # Course details popup
└── pages/            # Route endpoints
    ├── index.ejs     # Homepage (/)
    ├── courses.ejs   # Courses page (/courses)
    └── error.ejs     # Error handling
```

### Backend Structure
```
src/
├── types/           # TypeScript interfaces
├── services/        # Data services (Google Sheets + Mock)
├── routes/          # Express route handlers
└── server.ts        # Main application server

public/
├── css/             # Custom stylesheets with animations
└── js/              # Client-side JavaScript with event handlers
```

## 📊 Mock Data

The application includes realistic mock data:

### Course Categories
- **Scrum Fundamentals**: Introduction to Scrum, Certified ScrumMaster
- **Advanced Scrum**: Advanced techniques, Distributed Teams, Metrics
- **Agile Leadership**: Leadership masterclass and transformation
- **Product Management**: Product Owner essentials, User stories
- **Team Collaboration**: Team building and communication

### Sample Courses
- Introduction to Scrum
- Certified ScrumMaster (CSM)  
- Product Owner Essentials
- Advanced Scrum Techniques
- Agile Team Building
- Scrum for Distributed Teams
- Agile Leadership Masterclass
- Scrum Metrics and KPIs
- User Story Writing Workshop

## 🔌 Google Sheets Integration (Optional)

To switch from mock data to Google Sheets:

1. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
2. **Configure Variables**
   ```env
   GOOGLE_SHEETS_API_KEY=your_api_key
   GOOGLE_SHEET_ID=your_sheet_id
   ```

3. **Sheet Structure**
   
   **Courses Sheet**:
   | id | title | description | category_id | modules |
   
   **Categories Sheet**:
   | id | name |

4. **Enable API Integration**
   In `src/services/googleSheets.ts`, uncomment the real API calls in `getCoursesWithCategories()`

## 🎨 Customization

### Adding New Pages
```ejs
<!-- views/pages/about.ejs -->
<% 
const body = `
<%- include('../components/hero-section') %>
<div class="container">
    <h2>About Us</h2>
</div>
`;
-%>
<%- include('../layouts/main', { title, body }) %>
```

### Creating Components
```ejs
<!-- views/components/testimonials.ejs -->
<section class="py-5">
    <div class="container">
        <!-- Component content -->
    </div>
</section>
```

### Route Mapping
- `GET /` → `pages/index.ejs` (Homepage)
- `GET /courses` → `pages/courses.ejs` (Courses)
- `404` → `pages/error.ejs` (Error handling)

## 🚀 Deployment Ready

- **Production Build**: `npm run build` compiles TypeScript
- **Environment Variables**: Configured for cloud deployment
- **Static Assets**: Optimized CSS/JS in `public/`
- **Error Handling**: Comprehensive error pages and fallbacks

## 📝 Available Scripts

```bash
npm run dev      # Development server with hot reload
npm run build    # Production TypeScript build
npm start        # Start production server
npm run lint     # Run linting (placeholder)
npm run test     # Run tests (placeholder)
```

## 🤝 Developer Experience

- **Familiar Structure**: Next.js developers will feel at home
- **TypeScript**: Full type safety across the application  
- **Hot Reload**: Instant updates during development
- **Modular**: Easy to extend with new pages and components
- **Bootstrap 5**: Modern, responsive design system
- **Clean Code**: Well-organized, maintainable codebase

Perfect for building scalable course websites, training platforms, or educational portals!
