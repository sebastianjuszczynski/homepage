console.log("Siemanko!!!✋");

let container = document.querySelector(".container");
let toggleTheme = document.querySelector(".button--js-themeChange");
let toggleSize = document.querySelector(".button--js-imageSizeChange");
let image = document.querySelector(".image");
let tableDatas = [...document.querySelectorAll(".table__data")];
let buttons = [...document.querySelectorAll(".buttons")];
let navigationLinks = [...document.querySelectorAll(".navigation__link")];



toggleTheme.addEventListener("click", () => {
    container.classList.toggle("container--js-darkTheme");
    tableDatas.forEach(tableData => tableData.classList.toggle("table__data--js-darkTheme"));
    buttons.forEach(button => button.classList.toggle("buttons--js-darkTheme"));
    navigationLinks.forEach(navigationLink => navigationLink.classList.toggle("navigation__link--js-darkTheme"));
    if (toggleTheme.innerText === "Zmień na ciemny motyw") {
        toggleTheme.innerText = "Zmień na jasny motyw"
    }
    else if (toggleTheme.innerText === "Zmień na jasny motyw") {
        toggleTheme.innerText = "Zmień na ciemny motyw"
    }
});
toggleSize.addEventListener("click", () => {
    image.classList.toggle("image--js-sizeChange")
});





