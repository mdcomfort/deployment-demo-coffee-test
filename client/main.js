console.log("Heyyyy")

const header = document.querySelector("header")

document.addEventListener("scroll", () => {
    console.log(window)
    const {pageYOffset} = window;
    if(pageYOffset > 80) {
        header.classList.add("shrink-header")
    } else {
        header.classList.remove("shrink-header")
    }
})