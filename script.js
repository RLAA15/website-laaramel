document.getElementById("homeBtn").addEventListener("click", () => showScreen("screen1"));
document.getElementById("skillsBtn").addEventListener("click", () => showScreen("screen2"));
document.getElementById("projectsBtn").addEventListener("click", () => showScreen("screen3"));
document.getElementById("contactBtn").addEventListener("click", () => showScreen("screen4"));

function showScreen(id) {
      // hide all screens
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

      // show the selected one
      document.getElementById(id).classList.add('active');
}