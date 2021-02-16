const input = document.querySelector("input");
const passwordsList = ["oNe", "Julia", "twO", "three"]
const notifications = ["Well Done!", "Come In!", "Correct", "Good User!"]
const div = document.querySelector(".messageArea");

function check(e) {
    let putPassword = e.target.value;
    passwordsList.forEach(password => {
        password.toLowerCase() == putPassword.toLowerCase() ? printNotification() : "";
    })

}
function printNotification() {
    randomNotification = Math.floor(Math.random() * notifications.length)
    div.textContent = `${notifications[randomNotification]}`
    input.value = "";
}


input.addEventListener("input", check);
