
// DARK MODE SWITCH
const toggleSwitch = document.getElementById("darkModeToggle");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
    }
});

const toggleContent = (type)=> {
    console.log("Clicked", type);
    container = document.getElementById(`${type}-container`)
    console.log(container)
    container.classList.add("active");
    filter = document.getElementById(`${type}`)
    filter.classList.add("selected");
    filters = document.getElementById("filters").querySelector("ul").querySelectorAll("li")
    for(let filter of filters) {
        console.log(filter.id)
        if(filter.id != type) {
            console.log("attempting to remove", filter.id)
            filter.classList.remove("selected");
            document.getElementById(`${filter.id}-container`).classList.remove("active");
        }
    }
}

document.getElementById("code").addEventListener("click", () => {toggleContent("code")});
document.getElementById("woodwork").addEventListener("click", () => {toggleContent("woodwork")});
document.getElementById("sewing").addEventListener("click", () => {toggleContent("sewing")});
document.getElementById("pottery").addEventListener("click", () => {toggleContent("pottery")});
document.getElementById("photography").addEventListener("click", () => {toggleContent("photography")});
document.getElementById("volunteering").addEventListener("click", () => {toggleContent("volunteering")});
document.getElementById("travel").addEventListener("click", () => {toggleContent("travel")});
document.getElementById("books").addEventListener("click", () => {toggleContent("books")});

document.getElementById("back-to-top").addEventListener("click", () => {
    window.scrollTo(
        {
            top: 0,
            behavior: 'smooth'
        }
    );
    });

