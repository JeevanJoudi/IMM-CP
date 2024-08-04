document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTopMobile = 0;
    let lastScrollTopDesktop = 0;
    const navMainContainer = document.querySelector('.nav-main-container');
    const navMainContainerMobile = document.querySelector('.nav-main-container-m');
    const x = window.matchMedia("(max-width: 768px)"); // Check for mobile devices

    // Ensure navigation elements exist
    if (navMainContainer && navMainContainerMobile) {
        function handleScroll() {
            const isMobile = x.matches;
            const scrollTop = isMobile ? window.scrollY : window.scrollX;

            if (isMobile) {
                // Mobile devices
                if (scrollTop === 0) {
                    navMainContainer.classList.add('hidden');
                    navMainContainerMobile.classList.add('hidden-m');
                } else if (scrollTop > lastScrollTopMobile) {
                    // Scrolling down
                    navMainContainer.classList.add('hidden');
                    navMainContainerMobile.classList.add('hidden-m');
                } else {
                    // Scrolling up
                    navMainContainer.classList.remove('hidden');
                    navMainContainerMobile.classList.remove('hidden-m');
                }
                lastScrollTopMobile = scrollTop <= 0 ? 0 : scrollTop;
            } else {
                // Non-mobile devices
                if (scrollTop > lastScrollTopDesktop) {
                    // Scrolling right
                    navMainContainer.classList.add('hidden');
                    navMainContainerMobile.classList.add('hidden-m');
                } else {
                    // Scrolling left
                    navMainContainer.classList.remove('hidden');
                    navMainContainerMobile.classList.remove('hidden-m');
                }
                lastScrollTopDesktop = scrollTop <= 0 ? 0 : scrollTop;
            }
        }

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Handle visibility on resize
        window.addEventListener('resize', () => {
            // Update `isMobile` after resize
            const isMobile = x.matches;
            if (isMobile) {
                if (window.scrollY === 0) {
                    navMainContainer.classList.add('hidden');
                    navMainContainerMobile.classList.add('hidden-m');
                } else {
                    navMainContainer.classList.remove('hidden');
                    navMainContainerMobile.classList.remove('hidden-m');
                }
            } else {
                navMainContainer.classList.remove('hidden');
                navMainContainerMobile.classList.remove('hidden-m');
            }
        });

        // Initial visibility check
        handleScroll();
    }
});
