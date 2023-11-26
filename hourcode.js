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



document.addEventListener('DOMContentLoaded', function () {
    var text = "This is a typewriter effect. ";
    var index = 0;
    var intervalId = setInterval(function () {
        document.getElementById('typewriter-text').textContent += text[index];
        index++;
        if (index === text.length) {
            clearInterval(intervalId); 
        }
    }, 100); 
});



document.addEventListener("DOMContentLoaded", function () {
    var text = `In the first place, our project named as Hour of Code was conducted in Baku Secondary School No. 287, "Zəkalar" Lyceum. We have noticed a lot of interesting facts and noted many observations. Before our lesson, we have made a lot of preparations. We were ready for very energetic students. 
    During the Hour of Code, our group conducted a very interesting and interactive lesson which included main information about ADA UNIVERSITY, the foundation of the programming and interactive games and coding part. Students very energetically attended the lesson. Before and after brief data about ADA UNIVERSITY we asked students about our University then we asked a few questions about programming and algorithms. Then we taught essential parts of programming for giving the tasks. Then we gave easy and normal tasks for students to demonstrate their knowledge. Finally, we practised in code.org using code blocks. They even solved the tasks using fewer blocks than needed and they helped each other to complete tasks. At the end, all of us took photos of all of us and we made small gifts for the student who completed the task with the least amount of code blocks. After that, we gave them the link to the code.org. Finally, we finished our journey and said the goodbye students, even though they didn’t want us to finish our lesson
    During the lesson, one of the questions was “Do you have a similar course to our lesson”. The main answers were Informatics lessons and STEM lessons which were conducted every week. Mainly they practiced in old programs but some of them were using Scratch and ALPlogo for practicing their programming skills. Also, few students had lessons which included real programming languages such as Python. In these courses mainly they taught the theoretical part of computer science. However students informed us that they are coding the Lego robots to do small tasks in STEM courses, and also they have abilities such as 3d modelling. Even though they are not only busy with 3d modelling, they also use 3d printers to print them and demonstrate the results of their 3d modelled constructions.
    They liked our session, and they told us we needed it again and again because most of them wanted to be good programmers, IT specialists, etc. They want to stay with us more, so we spend two hours of our time with them. In the first part (the presentation about ADA University), some students ask questions and other students say that they want to study at ADA University. One of the students asked about our score from the government exam to apply to university, but we couldn't answer because Kenan and Piri graduated from ADA school, but we showed them a passing score at the university.    
    `; 
    var textContainer = document.getElementById("text-container");

    function typeWriter(text, index, callback) {
        if (index < text.length) {
            textContainer.innerHTML += text.charAt(index);
            index++;
            setTimeout(function () {
                typeWriter(text, index, callback);
            }, 0.1);
        } else {
            if (callback) {
                setTimeout(callback, 500); 
            }
        }
    }

    function startTyping() {
        textContainer.innerHTML = ""; 
        typeWriter(text, 0, function () {
            console.log("Text typing completed.");
        });
    }

    startTyping();
});

