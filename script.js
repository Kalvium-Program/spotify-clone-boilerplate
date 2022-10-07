function toggleSidebar() {
    document
        .getElementsByClassName("toggle-logo")[0]
        .classList.toggle("active");
    document
        .getElementsByClassName("sidebar")[0]
        .classList.toggle("active");
}
