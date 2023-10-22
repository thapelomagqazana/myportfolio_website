// Include Handlebars.js and page.js libraries in your project.

// Define your Handlebars templates (loaded in your HTML).

// Define route handlers and render functions for each route.
// page('/', () => renderTemplate('home'));
// page('/about', () => renderTemplate('about'));
// page('/projects', () => renderTemplate('projects'));
// page('/contact', () => renderTemplate('contact'));

// // Set a default route.
// page();

// // Function to render Handlebars templates.
// function renderTemplate(templateId) {
//     const templateSource = document.getElementById(`${templateId}-template`).innerHTML;
//     const template = Handlebars.compile(templateSource);
//     document.getElementById('content').innerHTML = template();
// }

// Initially hide the specified paragraphs
const hiddenParagraphs = document.querySelectorAll(".about-paragraph[style='display: none;']");

// Add a click event listener to the button
document.getElementById("toggleButton").addEventListener("click", function() {
    for (const paragraph of hiddenParagraphs) {
        if (paragraph.style.display === "none") {
            paragraph.style.display = "block";
        } else {
            paragraph.style.display = "none";
        }
    }

    // Toggle the button text
    this.textContent = this.textContent === "Read More" ? "Read Less" : "Read More";
});


$(document).ready(function() {
    $(".scroll-link").click(function(e) {
        e.preventDefault(); // Prevent the default link behavior
        var target = $(this).data("target");
        var $targetSection = $("#" + target);
        if ($targetSection.length) {
            $("html, body").animate({
                scrollTop: $targetSection.offset().top
            }, 1000); // Adjust the animation speed if needed
        }
    });
});

document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("click", () => {
        const githubLink = project.getAttribute("data-github-link");
        if (githubLink) {
            window.open(githubLink, "_blank");
        }
    });
});

