import './homework-112.scss';


var reviews = document.getElementsByClassName('review');
var leftArrow = document.getElementsByClassName('arrow')[0];
var rightArrow = document.getElementsByClassName('arrow')[1];

var currentReview;
var nextReview;

function carousel(direction) {
    for (var i = 0; i < reviews.length; i++) {
        if (reviews[i].classList.contains("show")) {
            currentReview = reviews[i];
            if (direction == 'forward') {
                if (i + 1 > reviews.length - 1) {
                    nextReview = reviews[0];
                } else {
                    nextReview = reviews[i + 1];
                }
            } else {
                if (i - 1 < 0) {
                    nextReview = reviews[reviews.length - 1];
                } else {
                    nextReview = reviews[i - 1];
                }
            }
        }
    }

    currentReview.classList.remove("show");
    nextReview.classList.add("show");
}

leftArrow.onclick = function() {
    carousel('backward');
}
rightArrow.onclick = function() {
    carousel('forward');
}