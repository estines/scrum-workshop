// Course details modal functionality
function showCourseDetails(id, title, description, category, modules) {
  const modal = new bootstrap.Modal(document.getElementById('courseModal'));
  
  // Populate modal content
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDescription').textContent = description;
  document.getElementById('modalCategory').textContent = category;
  
  const modulesSection = document.getElementById('modalModulesSection');
  const modulesText = document.getElementById('modalModules');
  
  if (modules && modules.trim()) {
    modulesText.textContent = modules;
    modulesSection.style.display = 'block';
  } else {
    modulesSection.style.display = 'none';
  }
  
  modal.show();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize tooltips if any exist
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Add event listeners to course detail buttons
  const courseDetailButtons = document.querySelectorAll('.course-details-btn');
  courseDetailButtons.forEach(button => {
    button.addEventListener('click', function() {
      const id = this.dataset.courseId;
      const title = this.dataset.courseTitle;
      const description = this.dataset.courseDescription;
      const category = this.dataset.courseCategory;
      const modules = this.dataset.courseModules;
      
      showCourseDetails(id, title, description, category, modules);
    });
  });
});