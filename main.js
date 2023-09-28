const closeIcons = document.querySelectorAll('.close-icon');

closeIcons.forEach((icon) => {
    icon.addEventListener('click', function() {
        const toaster = icon.closest('.toaster-container');
        if (toaster) {
            toaster.style.display = 'none';
        }
    });
});
