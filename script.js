function openBuilder() {
    document.querySelector(".hero").style.display = "none";
    document.getElementById("builder").style.display = "block";
}

function updateCV() {

    const name = document.getElementById("fullName").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const about = document.getElementById("about").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;

    document.getElementById("previewName").textContent =
        name || "Your Name";

    document.getElementById("previewJobTitle").textContent =
        jobTitle || "Your Job Title";

    document.getElementById("previewEmail").textContent =
        email || "email@example.com";

    document.getElementById("previewPhone").textContent =
        phone || "+00 000 000 000";

    document.getElementById("previewLocation").textContent =
        location || "Location";

    document.getElementById("previewAbout").textContent =
        about || "Your professional summary will appear here.";

    document.getElementById("previewExperience").textContent =
        experience || "Your work experience will appear here.";

    document.getElementById("previewEducation").textContent =
        education || "Your education will appear here.";

    document.getElementById("previewSkills").textContent =
        skills || "Your skills will appear here.";
}