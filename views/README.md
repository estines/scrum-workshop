# Views Structure - Next.js Page Router Style

This directory follows Next.js page router conventions for organized, scalable template management.

## Directory Structure

```
views/
├── layouts/          # Layout templates
│   └── main.ejs      # Main layout with nav, footer, scripts
├── components/       # Reusable UI components  
│   ├── hero-section.ejs
│   ├── category-overview.ejs
│   ├── course-listing.ejs
│   └── course-modal.ejs
└── pages/            # Page templates (routes)
    ├── index.ejs     # Homepage (/)
    ├── courses.ejs   # Courses page (/courses)
    └── error.ejs     # Error page (404)
```

## How It Works

### 1. Pages (`pages/`)
Each file represents a route endpoint:
- `pages/index.ejs` → `/` route
- `pages/courses.ejs` → `/courses` route  
- `pages/error.ejs` → error pages

### 2. Layouts (`layouts/`)
Shared page structures:
- `layouts/main.ejs` - Complete HTML document with navigation, footer
- Pages use: `<%- include('../layouts/main', { title, body }) %>`

### 3. Components (`components/`)
Reusable UI sections:
- `hero-section.ejs` - Hero banner
- `category-overview.ejs` - Category cards
- `course-listing.ejs` - Course grid
- `course-modal.ejs` - Course details modal

## Adding New Pages

1. **Create page file**: `views/pages/about.ejs`
2. **Add route**: In Express router
3. **Include components**: `<%- include('../components/hero-section') %>`
4. **Use layout**: `<%- include('../layouts/main', { title, body }) %>`

Example new page:
```ejs
<% 
const body = `
<%- include('../components/hero-section') %>
<div class="container">
    <h2>About Us</h2>
    <p>About content here...</p>
</div>
`;
-%>

<%- include('../layouts/main', { title, body }) %>
```

## Adding New Components

1. **Create component**: `views/components/testimonials.ejs`
2. **Include in pages**: `<%- include('../components/testimonials') %>`
3. **Pass data if needed**: Components have access to page data

## Benefits

- **Organized**: Clear separation of pages, layouts, components
- **Reusable**: Components used across multiple pages
- **Scalable**: Easy to add new pages and components
- **Maintainable**: Changes to layout affect all pages
- **Familiar**: Follows Next.js conventions developers know

## Route Mapping

```
/ → pages/index.ejs
/courses → pages/courses.ejs  
/404 → pages/error.ejs
```