// Tüm dropdown butonlarına click olayını ekleyelim
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        if (content) {
            content.classList.toggle('show');
            if (content.classList.contains('show')) {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.opacity = 1;
            } else {
                content.style.maxHeight = 0;
                content.style.opacity = 0;
            }
        }
    });
});


window.addEventListener('load', () => {
    const body = document.body;
    const logoContainer = document.querySelector('.logo-container');

    if (logoContainer) {
        body.classList.add('blurred');

        setTimeout(() => {
            logoContainer.classList.add('fade-out');
            
            setTimeout(() => {
                body.classList.remove('blurred');
            }, 2000); // 3 saniye sonra blur efektini kaldır
        }, 500); // 500ms sonra logo kaybolmaya başlasın
    }
});










   











