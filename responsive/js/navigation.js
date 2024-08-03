document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const navMainContainer = document.querySelector('.nav-main-container');
    const navMainContainerMobile = document.querySelector('.nav-main-container-m');
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Ensure navigation elements exist
    if (navMainContainer && navMainContainerMobile) {
        // Hide navigation on initial load if it's a mobile device and at the top of the page
        if (isMobile && window.scrollY === 0) {
            navMainContainer.classList.add('hidden');
            navMainContainerMobile.classList.add('hidden-m');
        }

        // Scroll handler function
        function handleScroll() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scrolling down
                navMainContainer.classList.add('hidden');
                navMainContainerMobile.classList.add('hidden-m');
            } else {
                // Scrolling up
                navMainContainer.classList.remove('hidden');
                navMainContainerMobile.classList.remove('hidden-m');
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        }

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Ensure visibility updates on resize
        window.addEventListener('resize', () => {
            const isMobileResize = window.matchMedia("(max-width: 768px)").matches;
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