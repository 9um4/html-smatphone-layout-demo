function toggleMenu() {
    let header_right_button = document.getElementById('header-right-button');
    let toggle_container = document.getElementById('toggle-container');
    header_right_button.classList.toggle('active');
    toggle_container.classList.toggle('active');
}