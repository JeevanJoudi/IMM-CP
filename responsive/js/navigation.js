document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const navMainContainer = document.querySelector('.nav-main-container');
    const navMainContainerMobile = document.querySelector('.nav-main-container-m');
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Ensure navigation elements exist
    if (navMainContainer && navMainContainerMobile) {
        // Hide navigation on initial load if it's a mobile device and at the top of the page
        if (mediaQuery.matches && window.scrollY === 0) {
            navMainContainer.classList.add('hidden');
            navMainContainerMobile.classList.add('hidden-m');
        }

        // Scroll handler function
        function handleScroll() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (mediaQuery.matches) {
                // Mobile view - do nothing special on scroll
                return;
            }

            if (scrollTop > lastScrollTop) {
                // Scrolling down on desktop
                navMainContainer.classList.add('hidden');
            } else {
                // Scrolling up on desktop
                navMainContainer.classList.remove('hidden');
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        }

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Ensure visibility updates on resize
        window.addEventListener('resize', () => {
            const isMobileResize = mediaQuery.matches;
            if (isMobileResize && window.scrollY === 0) {
                navMainContainer.classList.add('hidden');
                navMainContainerMobile.classList.add('hidden-m');
            } else {
                navMainContainer.classList.remove('hidden');
                navMainContainerMobile.classList.remove('hidden-m');
            }
        });
    }
});
