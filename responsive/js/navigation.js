document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const navMainContainer = document.querySelector('.nav-main-container');
    const navMainContainerMobile = document.querySelector('.nav-main-container-m');
    const x = window.matchMedia("(max-width: 768px)"); // Check for mobile devices
  
    // Ensure navigation elements exist
    if (navMainContainer && navMainContainerMobile) {
      // Hide navigation on initial load if it's a mobile device and at the top of the page
      if (x.matches && (window.pageYOffset === 0 || document.documentElement.scrollTop === 0)) {
        navMainContainer.classList.add('hidden');
        navMainContainerMobile.classList.add('hidden');
      }
  
      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        if (x.matches) { 
          // For mobile devices
          if (scrollTop === 0) {
            // At the top of the page on a mobile device
            navMainContainer.classList.add('hidden');
            navMainContainerMobile.classList.add('hidden');
          } else if (scrollTop > lastScrollTop) {
            // Scrolling down on a mobile device
            navMainContainer.classList.add('hidden');
            navMainContainerMobile.classList.add('hidden');
          } else {
            // Scrolling up on a mobile device
            navMainContainer.classList.remove('hidden');
            navMainContainerMobile.classList.remove('hidden');
          }
        } else {
          // For non-mobile devices
          if (scrollTop > lastScrollTop) {
            // Scrolling down
            navMainContainer.classList.add('hidden');
            navMainContainerMobile.classList.add('hidden');
          } else {
            // Scrolling up
            navMainContainer.classList.remove('hidden');
            navMainContainerMobile.classList.remove('hidden');
          }
        }
  
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      });
    }
  });
  