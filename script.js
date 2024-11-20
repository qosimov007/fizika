function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
  
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
  
    // Show the selected page
    document.getElementById(pageId).classList.add('active');
  
    // Add active class to the corresponding nav link
    document.querySelector(`.nav-link[onclick="showPage('${pageId}')"]`).classList.add('active');
  }
  