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
        // Prepare email parameters for sending to your email
        let myEmailParams = {
            to_email: "tanviupadhyay68@gmail.com", // Replace with your email
            from_name: userName,
            from_email: userEmail,
            subject: subject,
            message: message
        };
        // Send email to your inbox
        emailjs.send("service_81mz30h", "template_k4udgx2", myEmailParams, "teTkJerqTlu_neOTX")
            .then(function (response) {
                console.log("Message sent to my email!", response.status, response.text);
            })
            .catch(function (error) {
                console.log("Failed to send message to my email", error);
            });
        // Prepare email parameters for auto-reply
        let templateParams = {
            user_name: userName,
            user_email: userEmail,
            subject: subject,
            message: message
        };
        // Send auto-reply email using EmailJS
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
