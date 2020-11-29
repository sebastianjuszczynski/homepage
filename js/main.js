{
    const welcomeMessage = () => {
        console.log("Siemanko!!!✋");
    }
    welcomeMessage();

    const navigationLinksColorBackgroundChange = () => {
        let navigationLinks = [...document.querySelectorAll(".navigation__link")];
        navigationLinks.forEach(navigationLink => navigationLink.classList.toggle("navigation__link--js-darkTheme"));

    }

    const buttonsBackgroundColorChange = () => {
        let buttons = [...document.querySelectorAll(".buttons")];
        buttons.forEach(button => button.classList.toggle("buttons--js-darkTheme"));

    }

    const toggleBackgroundColorTable = () => {
        let tableDatas = [...document.querySelectorAll(".table__data")];
        tableDatas.forEach(tableData => tableData.classList.toggle("table__data--js-darkTheme"));

    }

    const changeBackgroundColor = () => {
        let container = document.querySelector(".container");
        container.classList.toggle("container--js-darkTheme");

    }

    const buttonsTextChange = () => {
        let toggleTheme = document.querySelector(".button--js-themeChange");

        if (toggleTheme.innerText === "Zmień na ciemny motyw") {
            toggleTheme.innerText = "Zmień na jasny motyw"
        }
        else if (toggleTheme.innerText === "Zmień na jasny motyw") {
            toggleTheme.innerText = "Zmień na ciemny motyw"
        }
    }
    const changeImageSize = () => {
        let image = document.querySelector(".image");
        let toggleSize = document.querySelector(".button--js-imageSizeChange");
        toggleSize.addEventListener("click", () => {
            image.classList.toggle("image--js-sizeChange")
        });
    }


    const init = () => {
        let toggleTheme = document.querySelector(".button--js-themeChange");
        toggleTheme.addEventListener("click", () => {
            let container = document.querySelector(".container");
            container.classList.toggle("container--js-darkTheme");
            buttonsTextChange();
            toggleBackgroundColorTable();
            buttonsBackgroundColorChange();
            navigationLinksColorBackgroundChange();
            changeImageSize();
        });



    }
    init();

}




