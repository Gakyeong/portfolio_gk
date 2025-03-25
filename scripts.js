// JavaScript to toggle the dropdown on click
document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll('.navbar .dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            // Toggle the "open" class to show/hide the menu
            this.classList.toggle('open');
            
            // Close other open dropdowns
            dropdowns.forEach(function(otherDropdown) {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('open');
                }
            });
            
            // Prevent the click event from propagating (avoid closing immediately)
            event.stopPropagation();
        });
    });

    // Close the dropdowns if clicked outside
    document.addEventListener('click', function() {
        dropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('open');
        });
    });
});
