document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0;
  const navMainContainer = document.querySelector('.nav-main-container');
  const navMainContainerMobile = document.querySelector('.nav-main-container-m');
  const x = window.matchMedia("(max-width: 768px)"); // Check for mobile devices

  // Ensure navigation elements exist
  if (navMainContainer && navMainContainerMobile) {
      // Hide navigation on initial load if it's a mobile device and at the top of the page
      if (x.matches && (window.scrollY === 0)) {
          navMainContainer.classList.add('hidden');
          navMainContainerMobile.classList.add('hidden');
      }

      // Scroll handler function
      function handleScroll() {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;

          if (x.matches) {
              // For mobile devices
              if (scrollTop === 0) {
                  navMainContainer.classList.add('hidden');
                  navMainContainerMobile.classList.add('hidden');
              } else if (scrollTop > lastScrollTop) {
                  navMainContainer.classList.add('hidden');
                  navMainContainerMobile.classList.add('hidden');
              } else if (scrollTop < lastScrollTop) {
                  navMainContainer.classList.remove('hidden');
                  navMainContainerMobile.classList.remove('hidden');
              }
          } else {
              // For non-mobile devices
              if (scrollTop > lastScrollTop) {
                  navMainContainer.classList.add('hidden');
                  navMainContainerMobile.classList.add('hidden');
              } else if (scrollTop < lastScrollTop) {
                  navMainContainer.classList.remove('hidden');
                  navMainContainerMobile.classList.remove('hidden');
              }
          }

          lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
      }

      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Ensure visibility updates on resize
      window.addEventListener('resize', () => {
          if (x.matches && (window.scrollY === 0)) {
              navMainContainer.classList.add('hidden');
              navMainContainerMobile.classList.add('hidden');
          } else {
              navMainContainer.classList.remove('hidden');
              navMainContainerMobile.classList.remove('hidden');
          }
      });
  }
});
