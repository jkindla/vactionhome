(function($) { 
    "use strict";
		
    // Page cursors
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
        t.style.top = n.clientY + "px", 
        e.style.left = n.clientX + "px", 
        e.style.top = n.clientY + "px", 
        i.style.left = n.clientX + "px", 
        i.style.top = n.clientY + "px"
    });

    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");

    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }

    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }

    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }

    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
	
    var pos = 0;
    window.setInterval(function(){
        pos++;
        document.getElementsByClassName('moving-image')[0].style.backgroundPosition = pos + "px 0px";
    }, 18);


	let currentIndex = 0;

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelectorAll('.carousel-container').forEach((container) => {
    const carousel = container.querySelector('.carousel');
    const items = container.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    container.querySelector('.carousel-button.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    container.querySelector('.carousel-button.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

document.querySelectorAll('.hover-target:not(.no-custom-cursor)').forEach((element) => {
    element.addEventListener('mouseover', n); 
    element.addEventListener('mouseout', s);
});

    $(document).ready(function() {			

        // Toggle expand/collapse on Full Info link click
        $(document).on('click', '.full-info-link', function(event) {
            event.preventDefault();
            const listItem = $(this).closest('li');
            listItem.toggleClass('expanded');
        });

        // Dynamic hover event for case-study names
        $('.case-study-name').on('mouseenter', function() {
            const index = $(this).index() + 1; // Get the index of the hovered item

            // Remove active and show classes from all elements
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass('show');

            // Add active and show classes to the current hovered item
            $('.case-study-images li:nth-child(' + index + ')').addClass('show');
            $(this).addClass('active');
        });

        // Trigger mouseenter on the first item to display it by default
        $('.case-study-name:nth-child(1)').trigger('mouseenter');
    });

})(jQuery); 