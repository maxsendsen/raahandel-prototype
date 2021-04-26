document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener('click', function(event) {

        // If the clicked element doesn't have the right selector, bail
        if (!event.target.matches('#chat')) return;

        // Don't follow the link
        event.preventDefault();


        document.getElementById('expandedbox').classList.add('active');

    }, false);

    document.addEventListener('click', function(event) {

        // If the clicked element doesn't have the right selector, bail
        if (!event.target.matches('#close')) return;

        // Don't follow the link
        event.preventDefault();


        document.getElementById('expandedbox').classList.remove('active');

    }, false);



});