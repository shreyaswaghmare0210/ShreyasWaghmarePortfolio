const mobileMenu = document.getElementById('mobile-menu');
        const navList = document.getElementById('nav-list');

        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        document.querySelectorAll('#nav-list li a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
