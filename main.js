window.onload = () => {
    const trasition_el = document.querySelector('.transition');
    setTimeout(() => {
        trasition_el.classList.remove('is-active');

    }, 500);
};

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener('click', function(event) {


        if (!event.target.matches('#chat')) return;


        event.preventDefault();


        document.getElementById('expandedbox').classList.add('active');

    }, false);

    document.addEventListener('click', function(event) {


        if (!event.target.matches('#close')) return;


        event.preventDefault();


        document.getElementById('expandedbox').classList.remove('active');

    }, false);



});