// Function to toggle project description visibility
function toggleDescription(projectId) {
    const description = document.getElementById(projectId);
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}