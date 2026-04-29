document.querySelectorAll('.dropdown-toggle').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        btn.parentElement.classList.toggle('open');
    });
});

document.addEventListener('click', function() {
    document.querySelectorAll('.has-dropdown.open').forEach(function(el) {
        el.classList.remove('open');
    });
});
