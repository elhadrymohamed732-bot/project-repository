// 1. تغيير شكل الهيدر لما تنزل بالصفحة (Header Scroll Effect)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'transparent';
        header.style.padding = '25px 0';
        header.style.boxShadow = 'none';
    }
});

// 2. تفعيل التمرير الناعم (Smooth Scroll) لكل اللينكات
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});