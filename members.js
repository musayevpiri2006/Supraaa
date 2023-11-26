function random(min, max) {
    return Math.random() * (max - min) + min;
}

document.addEventListener("DOMContentLoaded", function() {
    createDots();
    setTimeout(function() {
        closeLoader();
    }, 1000); 
});


document.addEventListener("DOMContentLoaded", function() {
    createDots();
    moveDots();
    setTimeout(function() {
        closeLoader();
    }, 1000); 
});

function createDots() {
    var numDots = 50; 
    var container = document.body;

    for (var i = 0; i < numDots; i++) {
        var dot = document.createElement("div");
        dot.className = "dot";
        container.appendChild(dot);

        var size = Math.random() * 2 + 2;
        dot.style.width = size + "px";
        dot.style.height = size + "px";

        var xPos = Math.random() * window.innerWidth;
        var yPos = Math.random() * window.innerHeight;

        dot.style.left = xPos + "px";
        dot.style.top = yPos + "px";
    }
}

function moveDots() {
    var dots = document.querySelectorAll('.dot');
    
    dots.forEach(function(dot) {
        animateDot(dot);
    });
}

function animateDot(dot) {
    var angle = random(0, 360);
    var distance = random(1, 5); 
    var speed = random(0.1, 0.5);

    function move() {
        var radians = angle * (Math.PI / 180);
        var x = parseFloat(dot.style.left) + Math.cos(radians) * distance;
        var y = parseFloat(dot.style.top) + Math.sin(radians) * distance;

        var maxX = window.innerWidth - parseFloat(dot.style.width);
        var maxY = window.innerHeight - parseFloat(dot.style.height);

        if (x < 0 || x > maxX) {
            angle = (angle + 180) % 360; 
        }

        if (y < 0 || y > maxY) {
            angle = (360 - angle) % 360; 
        }

        dot.style.left = x + 'px';
        dot.style.top = y + 'px';

        requestAnimationFrame(move);
    }

    move();
}


function closeLoader() {
    var loader = document.getElementById("loader");
    loader.classList.add("hidden");
}




document.addEventListener('DOMContentLoaded', function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = JSON.parse(elements[i].getAttribute('data-rotate'));
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], toRotate, period);
        }
    }
});

var TxtRotate = function (element, toRotate, period) {
    this.toRotate = toRotate;
    this.element = element;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.element.innerHTML = this.txt;

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};






