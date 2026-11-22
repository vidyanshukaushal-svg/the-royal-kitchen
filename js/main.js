/**
 * THE ROYAL KITCHEN — Main JavaScript File
 * Fictional Restaurant Demonstration Project • Kanpur, India
 * 
 * Implemented Features:
 * - Milestone 3 & 4: Non-intrusive demo button toast feedback
 * - Milestone 5: Dual-criteria interactive food menu filtering with accessible announcements
 * - Milestone 6: Responsive navigation bar, mobile drawer, and floating back-to-filters button
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('The Royal Kitchen script loaded successfully.');

    // 1. Initialize responsive header navigation and mobile drawer
    initNavigation();

    // 2. Initialize floating "Back to Filters" button on mobile & scroll
    initBackToFilters();

    // 3. Initialize demo toast notifications for preview action buttons
    initDemoToast();

    // 4. Initialize dual-filter food menu (Dietary + Category)
    initMenuFilter();
});

/**
 * Initializes the sticky site header navigation and mobile drawer toggle.
 * Provides full keyboard accessibility (Escape to close, aria-expanded).
 */
function initNavigation() {
    const header = document.getElementById('site-header');
    const toggleBtn = document.getElementById('mobile-nav-toggle');
    const nav = document.getElementById('primary-navigation');

    if (!toggleBtn || !nav) return;

    function openNav() {
        toggleBtn.setAttribute('aria-expanded', 'true');
        nav.classList.add('is-open');
    }

    function closeNav() {
        toggleBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
    }

    toggleBtn.addEventListener('click', () => {
        const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
            closeNav();
        } else {
            openNav();
        }
    });

    // Close mobile nav when clicking any navigation link
    const navLinks = nav.querySelectorAll('.nav-link, .mobile-drawer-cta button');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeNav();
        });
    });

    // Close on Escape key press and return focus to toggle button
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
            closeNav();
            toggleBtn.focus();
        }
    });

    // Close on click outside header
    document.addEventListener('click', (event) => {
        if (toggleBtn.getAttribute('aria-expanded') === 'true' && !header.contains(event.target)) {
            closeNav();
        }
    });
}

/**
 * Initializes the floating "Back to Filters" button.
 * Appears ONLY when visitors scroll down past the filter controls into the 24-dish menu,
 * and smoothly returns to the filter controls on click.
 */
function initBackToFilters() {
    const backBtn = document.getElementById('back-to-filters-btn');
    const menuSection = document.getElementById('menu-section');
    const menuControls = document.querySelector('.menu-controls');
    const menuGrid = document.getElementById('menu-grid');
    const header = document.getElementById('site-header');

    if (!backBtn || !menuSection || !menuControls || !menuGrid) return;

    // Guaranteed hidden on initial page load
    backBtn.hidden = true;
    backBtn.classList.remove('is-visible');

    let ticking = false;

    function updateVisibility() {
        const headerHeight = header ? header.offsetHeight : 64;
        const controlsRect = menuControls.getBoundingClientRect();
        const gridRect = menuGrid.getBoundingClientRect();

        // Condition 1: Must have scrolled past the bottom of the filter controls
        const pastFilters = controlsRect.bottom <= (headerHeight + 20);

        // Condition 2: Must be within the menu grid (dishes actively in viewport)
        const insideMenuCards = (gridRect.top < window.innerHeight) && (gridRect.bottom > 160);

        // Show ONLY when past the filter controls AND inside the menu cards
        const shouldShow = pastFilters && insideMenuCards;

        if (shouldShow) {
            backBtn.hidden = false;
            requestAnimationFrame(() => {
                backBtn.classList.add('is-visible');
            });
        } else {
            backBtn.classList.remove('is-visible');
            setTimeout(() => {
                if (!backBtn.classList.contains('is-visible')) {
                    backBtn.hidden = true;
                }
            }, 220);
        }
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(updateVisibility);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial check on load
    updateVisibility();

    backBtn.addEventListener('click', () => {
        const headerHeight = header ? header.offsetHeight : 64;
        const controlsTop = menuControls.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;

        window.scrollTo({
            top: Math.max(0, controlsTop),
            behavior: 'smooth'
        });

        // Set focus to the active filter button for accessibility
        setTimeout(() => {
            const activeBtn = menuControls.querySelector('.filter-btn.active') || menuControls.querySelector('.filter-btn');
            if (activeBtn) {
                activeBtn.focus({ preventScroll: true });
            }
        }, 450);
    });
}

/**
 * Initializes the interactive food menu filtering system.
 * Filters dishes by combining dietary preference (All / Veg / Non-Veg)
 * and category tabs (Starters, Mains, Biryani, Breads, Desserts).
 */
function initMenuFilter() {
    const dietButtons = document.querySelectorAll('.diet-btn');
    const categoryButtons = document.querySelectorAll('.cat-btn');
    const menuCards = document.querySelectorAll('.menu-card');
    const emptyState = document.getElementById('menu-empty-state');
    const liveStatus = document.getElementById('menu-live-status');

    let currentDiet = 'all';
    let currentCategory = 'all';

    function applyFilters() {
        let visibleCount = 0;

        menuCards.forEach(card => {
            const cardDiet = card.getAttribute('data-diet');
            const cardCategory = card.getAttribute('data-category');

            const matchesDiet = (currentDiet === 'all') || (cardDiet === currentDiet);
            const matchesCategory = (currentCategory === 'all') || (cardCategory === currentCategory);

            if (matchesDiet && matchesCategory) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        // Show or hide empty state if no dishes match
        if (emptyState) {
            emptyState.hidden = (visibleCount > 0);
        }

        // Accessible live region announcement for assistive technology
        if (liveStatus) {
            const dietDescription = currentDiet === 'all' 
                ? 'all' 
                : (currentDiet === 'veg' ? 'vegetarian' : 'non-vegetarian');
            const categoryDescription = currentCategory === 'all' 
                ? 'all categories' 
                : currentCategory.replace('-', ' ');

            liveStatus.textContent = `Showing ${visibleCount} ${dietDescription} dish${visibleCount === 1 ? '' : 'es'} in ${categoryDescription}.`;
        }

        console.log(`[Menu Filter] Diet: ${currentDiet} | Category: ${currentCategory} | Visible: ${visibleCount}/24`);
    }

    // Attach listeners to Dietary Filter Buttons
    dietButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            dietButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            currentDiet = btn.getAttribute('data-diet');
            applyFilters();
        });
    });

    // Attach listeners to Category Filter Buttons
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            currentCategory = btn.getAttribute('data-category');
            applyFilters();
        });
    });
}

/**
 * Attaches non-intrusive demo feedback toast to demonstration buttons.
 */
function initDemoToast() {
    // Delegated click listener to catch all .demo-btn elements, even if added dynamically
    document.addEventListener('click', (event) => {
        const button = event.target.closest('.demo-btn');
        if (!button) return;

        const label = button.innerText.replace('(Demo)', '').trim();
        console.log(`[Demo Notice] '${label}' button clicked.`);
        showDemoNotice(label);
    });

    function showDemoNotice(actionName) {
        let toast = document.getElementById('demo-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'demo-toast';
            toast.setAttribute('role', 'status');
            toast.setAttribute('aria-live', 'polite');
            toast.style.cssText = `
                position: fixed;
                bottom: 24px;
                right: 24px;
                background-color: #302820;
                color: #FCFAF6;
                padding: 12px 16px 12px 20px;
                border-radius: 8px;
                font-family: var(--font-body, sans-serif);
                font-size: 14px;
                box-shadow: 0 4px 16px rgba(48, 40, 32, 0.25);
                border: 1px solid rgba(199, 167, 123, 0.3);
                z-index: 9999;
                display: flex;
                align-items: center;
                gap: 12px;
                transition: opacity 0.3s ease, transform 0.3s ease;
                max-width: calc(100vw - 48px);
            `;
            document.body.appendChild(toast);
        }

        function dismissToast() {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.pointerEvents = 'none';
            clearTimeout(toast.hideTimeout);
            toast.hideTimeout = setTimeout(() => {
                toast.hidden = true;
                toast.style.display = 'none';
            }, 300);
        }

        toast.hidden = false;
        toast.style.display = 'flex';
        toast.style.pointerEvents = 'auto';
        toast.innerHTML = `
            <span>Demo Notice: "${actionName}" is a preview button for future milestones.</span>
            <button type="button" aria-label="Dismiss notification" style="background:transparent;border:none;color:#C7A77B;cursor:pointer;padding:2px 6px;font-size:18px;line-height:1;border-radius:4px;">&times;</button>
        `;

        const closeBtn = toast.querySelector('button');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                dismissToast();
            }, { once: true });
        }

        // Trigger animation
        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        });

        clearTimeout(toast.timeoutId);
        toast.timeoutId = setTimeout(() => {
            dismissToast();
        }, 3000);
    }
}
