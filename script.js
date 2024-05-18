let home = document.body.getElementsByTagName("nav")[0].firstElementChild.firstElementChild;
let o = document.body.getElementsByTagName("nav")[0].firstElementChild.children;
let other = Array.from(o);


for (let i = 1; i < other.length - 2; i++) {

    other[i].addEventListener("mouseover", () => {
        other[i].style.color = "white";
        other[i].style.backgroundColor = "black";
        home.style.color = "black";
        home.style.backgroundColor = "white";
    })

}
for (let i = 0; i < other.length - 2; i++) {

    other[i].addEventListener("mouseout", () => {
        other[i].style.color = "black";
        other[i].style.backgroundColor = "white";
        home.style.color = "white";
        home.style.backgroundColor = "black";
    })

}
let latest = document.body.querySelector(".latest");
let popular = document.body.querySelector(".popular");

popular.addEventListener("mouseover", () => {
    popular.style.color = "white";
    popular.style.backgroundColor = "black";
    latest.style.color = "black";
    latest.style.backgroundColor = "white";
})

popular.addEventListener("mouseout", () => {
    popular.style.color = "black";
    popular.style.backgroundColor = "white";
    latest.style.color = "white";
    latest.style.backgroundColor = "black";
})



