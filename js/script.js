function showMenu() {
    const element = document.getElementById("hidden-menu");
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}