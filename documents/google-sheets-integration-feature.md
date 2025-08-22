# Google Sheets Integration Feature

## Overview
This feature handles all integration with Google Sheets API for both reading course data and writing lead information. It serves as the data layer for the entire application.

## Functional Requirements

* **Data Reading**: Fetch course and category data from Google Sheets
* **Data Writing**: Save lead form submissions to Google Sheets
* **API Configuration**: Secure configuration of Google Sheets API credentials
* **Error Handling**: Robust error handling for API operations
* **Data Caching**: Client-side caching of fetched course data
* **Real-time Updates**: Support for updating local data when sheets change

## Google Sheets Structure

### Courses Sheet
* **Columns**: `id`, `title`, `description`, `category_id`, `modules`
* **Access**: Read-only access required
* **Usage**: Source data for course display and filtering

### Categories Sheet
* **Columns**: `id`, `name`
* **Access**: Read-only access required
* **Usage**: Category names for course filtering and display

### Leads Sheet
* **Columns**: `Timestamp`, `Full Name`, `Email`, `Phone Number`, `Interested Courses`
* **Access**: Write access required
* **Usage**: Storage for lead form submissions

## Technical Implementation

### API Configuration
* **Authentication**: Use Google Sheets API with service account or OAuth
* **Environment Variables**: Store API credentials securely using environment variables
* **API Key Security**: Never expose write-access API keys on the client-side

### Data Reading Operations
* **Server-side Load**: Fetch all course and category data on server startup or request
* **Batch Requests**: Use batch API requests to fetch multiple sheets efficiently
* **Error Handling**: Implement retry logic and graceful degradation for API failures
* **Data Transformation**: Transform sheet data into EJS template-friendly formats for rendering

### Data Writing Operations
* **Lead Submission**: Append new lead data to the Leads sheet via Express routes
* **Timestamp Generation**: Automatically add submission timestamp on server
* **Data Validation**: Server-side validation before sending to API
* **Security**: Express server handles all write operations securely

## Security Implementation

### Server-Side Security
* **API Credentials**: All API credentials stored securely on server-side only
* **Environment Variables**: Use `.env` files for local development
* **Production Security**: Use secure environment variable management in production

### Write Operation Security
* **Express Routes**: Implement write operations via secure Express routes
* **Server-side Processing**: All form submissions handled by Express backend
* **Credential Isolation**: All credentials kept secure on server-side
* **Request Validation**: Server-side request validation and sanitization

## Data Flow

### Reading Flow
1. Server receives page request
2. Fetch course data from Courses sheet (with caching)
3. Fetch category data from Categories sheet (with caching)
4. Transform data for EJS template rendering
5. Render HTML with Bootstrap 5 components and populated course data

### Writing Flow
1. User submits lead form
2. Express server receives form data
3. Server validates and sanitizes form data
4. Express server writes to Leads sheet via Google Sheets API
5. Return success/error response with appropriate EJS page render
6. Display feedback using Bootstrap 5 alert components in server-rendered page

## Error Handling

* **Network Errors**: Handle network connectivity issues
* **API Rate Limits**: Implement rate limiting and retry logic
* **Authentication Errors**: Handle expired or invalid credentials
* **Data Validation Errors**: Validate data format before API calls
* **User Feedback**: Provide meaningful error messages to users

## Performance Considerations

* **Data Caching**: Cache course and category data locally
* **Batch Operations**: Use batch API requests where possible
* **Loading States**: Implement proper loading indicators
* **Pagination**: Consider pagination for large datasets
* **Background Updates**: Implement background data refresh

## API Integration Details

### Required Google APIs
* **Google Sheets API v4**: For reading and writing sheet data
* **Google Drive API**: May be needed for sheet access permissions

### Authentication Methods
* **Service Account**: Recommended for server-side operations
* **OAuth 2.0**: Alternative for user-based authentication
* **API Keys**: For read-only operations (with restrictions)

## Implementation Notes

* **Testing**: Implement comprehensive tests for all API operations
* **Documentation**: Document all API endpoints and data formats
* **Monitoring**: Implement logging and monitoring for API usage
* **Backup Strategy**: Consider data backup and recovery procedures
* **Future Enhancements**: Plan for potential migration to dedicated database