document.addEventListener("DOMContentLoaded", function () {
    var text = `Embarking on the ADA University website project was a paramount opportunity for our team to enhance our web development skills. Tasked with the challenge of applying our creativity to coding, we successfully completed the project, resulting in a dynamic and visually appealing website. The journey was not only a testament to our technical proficiency but also a delightful team experience.

    Throughout the development process, we dedicated ourselves to learning HTML, JavaScript, and CSS on Codecademy, constantly striving for improvement. The application of various styles and animations aimed to elevate the attractiveness of our project, turning it into a captivating digital space. Personal touches were added with brief personal information, fostering a sense of individuality within the collective effort.
    
    Building our website allowed us to bring the design ideas from our minds to life, sharing our creative vision with others. The collaborative learning environment, especially during the Hour of Code event, became a cherished memory where we shared valuable time teaching and learning from one another. In the end, our collective efforts and commitment resulted in a project that reflects our best work, showcasing the growth and camaraderie forged during this rewarding journey.    
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
