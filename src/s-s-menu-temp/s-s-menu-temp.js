import './s-s-menu-temp.scss';



//----- definitive carousel ---
document.addEventListener('DOMContentLoaded', function() {
    carousel = document.getElementsByClassName("carousel");

    for (var y = 0; y < carousel.length; ++y) {
        var left = carousel[y].getElementsByClassName("left");
        var right = carousel[y].getElementsByClassName("right");

        left[0].addEventListener("click", function() {
            var slides = this.parentNode.getElementsByClassName("slides");
            var newElement = slides[0].lastElementChild;
            slides[0].insertBefore(newElement, slides[0].firstElementChild);
        });

        right[0].addEventListener("click", function() {
            var slides = this.parentNode.getElementsByClassName("slides");
            var newElement = slides[0].firstElementChild;
            slides[0].appendChild(newElement);
        });
    }
});