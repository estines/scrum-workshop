# Lead Form Feature

## Overview
This feature provides a lead capture form that allows potential students to express interest in courses. The form collects user information and saves it to a Google Sheets spreadsheet for follow-up.

## Functional Requirements

* **Lead Capture Form**: Create a form to capture user leads that is easily accessible from the main page
* **Form Accessibility**: Form should be prominently placed or easily accessible via a button/link
* **Required Fields**: Full Name and Email Address are required fields
* **Optional Fields**: Phone Number is optional
* **Course Interest**: Multi-select list of "Interested Courses" populated dynamically from course data
* **Comments Field**: Free-text area for additional comments or questions
* **Form Submission**: Submit form data to Google Sheets Leads spreadsheet
* **Success Feedback**: Display success message after successful submission
* **Error Handling**: Handle and display submission errors gracefully

## Form Fields Specification

* **Full Name**: Text input, required, validation for non-empty value
* **Email Address**: Email input, required, validation for proper email format
* **Phone Number**: Text input, optional, validation for phone format if provided
* **Interested Courses**: Multi-select dropdown/checkboxes, dynamically populated from course data
* **Comments**: Textarea, optional, for additional notes or questions

## Technical Implementation

* **Server Framework**: Use Express with TypeScript for form handling and HTML generation
* **Template Engine**: EJS for form rendering and data binding
* **UI Framework**: Bootstrap 5 for form styling and responsive design
* **Form Validation**: Server-side validation with Bootstrap 5 client-side enhancement
* **State Management**: Server-side session management for form state
* **Data Integration**: Dynamically populate course options server-side from cached course data
* **API Integration**: Submit form data to Google Sheets API via secure Express routes

## Data Submission

### Target Sheet: Leads
* **Timestamp**: Automatically generated submission timestamp
* **Full Name**: User-provided full name
* **Email**: User-provided email address
* **Phone Number**: User-provided phone number (if provided)
* **Interested Courses**: Comma-separated list of selected course titles

## User Experience Requirements

* **Form Accessibility**: Easy to find with Bootstrap 5 button or card components
* **Clear Labeling**: Bootstrap 5 form labels with required field indicators
* **Validation Feedback**: Bootstrap 5 validation classes for real-time feedback
* **Submission Feedback**: Bootstrap 5 spinner components during submission
* **Success Message**: Bootstrap 5 alert success components for confirmation
* **Error Messages**: Bootstrap 5 alert danger components for user-friendly errors
* **Responsive Design**: Bootstrap 5 grid system for optimal mobile experience

## Security Considerations

* **API Security**: Secure handling of Google Sheets API credentials on server-side only
* **Server-side Protection**: All API keys kept secure on Express server
* **Express Routes**: Use Express routes for secure form submission handling
* **Data Validation**: Comprehensive server-side validation and sanitization
* **Rate Limiting**: Implement Express middleware for protection against form spam/abuse

## Validation Rules

* **Full Name**: Required, minimum 2 characters, no special validation
* **Email**: Required, valid email format using standard email regex
* **Phone Number**: Optional, valid phone format if provided
* **Interested Courses**: At least one course must be selected
* **Comments**: Optional, maximum character limit (e.g., 500 characters)

## Implementation Notes

* **Dynamic Course List**: Course options must update when course data changes
* **Form Reset**: Clear form after successful submission
* **Accessibility**: Ensure form is accessible via keyboard and screen readers
* **Testing**: Comprehensive testing of form validation and submission
* **Future Enhancements**: Consider adding CAPTCHA or other spam protection measures