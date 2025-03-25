(function () {
    // Theme Toggle
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    // Page Navigation
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    // Initialize EmailJS
    document.addEventListener("DOMContentLoaded", function () {
        emailjs.init("teTkJerqTlu_neOTX"); // Replace with your EmailJS Public Key
    });

    // Contact Form Submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Get form values
        let userName = document.getElementById("name").value.trim();
        let userEmail = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();

        // Validate input fields
        if (!userName || !userEmail || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Prepare email parameters
        let templateParams = {
            to_email: "tanviupadhyay68@gmail.com",
            user_name: userName,
            user_email: userEmail,
            subject: subject,
            message: message
        };

        // Send email using EmailJS
        emailjs.send("service_81mz30h", "template_k4udgx2", templateParams, "teTkJerqTlu_neOTX")
            .then(function (response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Message sent successfully!");
                document.getElementById("contact-form").reset(); // Reset form
            })
            .catch(function (error) {
                console.log("FAILED...", error);
                alert("Failed to send message. Please try again later.");
            });
    });
})();
// (function () {
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     })
//     //naya
//     document.addEventListener("DOMContentLoaded", function () {
//         emailjs.init("teTkJerqTlu_neOTX"); // Replace with your EmailJS Public Key
    
//         document.getElementById("contact-form").addEventListener("submit", function (event) {
//             event.preventDefault(); // Prevent page reload
    
//             // Get form values
//             let userName = document.getElementById("name").value.trim();
//             let userEmail = document.getElementById("email").value.trim();
//             let subject = document.getElementById("subject").value.trim();
//             let message = document.getElementById("message").value.trim();
    
//             // Validate input fields
//             if (!userName || !userEmail || !subject || !message) {
//                 alert("Please fill in all fields.");
//                 return;
//             }
    
//             // Prepare email parameters
//             let templateParams = {
//                 user_name: userName, 
//                 user_email: userEmail, 
//                 subject: subject,
//                 message: message
//             };
    
//             // Send email using EmailJS
//             emailjs.send("service_81mz30h", "template_k4udgx2", templateParams, "teTkJerqTlu_neOTX") // Add Public Key
//                 .then(function (response) {
//                     console.log("SUCCESS!", response.status, response.text);
//                     alert("Message sent successfully!");
//                     document.getElementById("contact-form").reset(); // Reset form
//                 })
//                 .catch(function (error) {
//                     console.log("FAILED...", error);
//                     alert("Failed to send message. Please try again later.");
//                 });
//         });
//     });
    
// })();

