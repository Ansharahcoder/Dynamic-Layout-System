

        document.addEventListener('DOMContentLoaded', () => {
            /* 1. Theme Switcher Logic with :root & dataset */
            const themeToggleBtn = document.getElementById('themeToggleBtn');
            const themeIcon = document.getElementById('themeIcon');
            const themeText = document.getElementById('themeText');
            const htmlElement = document.documentElement;

            themeToggleBtn.addEventListener('click', () => {
                const currentTheme = htmlElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                htmlElement.setAttribute('data-theme', newTheme);
                
                if (newTheme === 'dark') {
                    themeIcon.className = 'fa-solid fa-moon';
                    themeText.textContent = 'Dark Mode';
                } else {
                    themeIcon.className = 'fa-solid fa-sun';
                    themeText.textContent = 'Light Mode';
                }
            });

            /* 2. Responsive Sidebar Toggle Logic */
            const sidebar = document.getElementById('sidebar');
            const toggleSidebar = document.getElementById('toggleSidebar');
            const sidebarOverlay = document.getElementById('sidebarOverlay');

            toggleSidebar.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.toggle('mobile-open');
                    sidebarOverlay.classList.toggle('active');
                } else {
                    sidebar.classList.toggle('collapsed');
                }
            });

            sidebarOverlay.addEventListener('click', () => {
                sidebar.classList.remove('mobile-open');
                sidebarOverlay.classList.remove('active');
            });

            /* 3. Interactive Grid Column Switching */
            const analyticsGrid = document.getElementById('analyticsGrid');
            const btnGridAuto = document.getElementById('btnGridAuto');
            const btnGrid2 = document.getElementById('btnGrid2');
            const btnGrid4 = document.getElementById('btnGrid4');
            const gridBtns = [btnGridAuto, btnGrid2, btnGrid4];

            function setGridActive(activeBtn) {
                gridBtns.forEach(btn => btn.classList.remove('active'));
                activeBtn.classList.add('active');
            }

            btnGridAuto.addEventListener('click', () => {
                analyticsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(240px, 1fr))';
                setGridActive(btnGridAuto);
            });

            btnGrid2.addEventListener('click', () => {
                analyticsGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
                setGridActive(btnGrid2);
            });

            btnGrid4.addEventListener('click', () => {
                analyticsGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
                setGridActive(btnGrid4);
            });

            /* 4. Chart Randomization Interaction */
            const randomizeChart = document.getElementById('randomizeChart');
            const chartBars = document.querySelectorAll('.chart-bar');

            randomizeChart.addEventListener('click', () => {
                chartBars.forEach(bar => {
                    const randomHeight = Math.floor(Math.random() * 75) + 20;
                    bar.style.height = `${randomHeight}%`;
                });
            });
        });
