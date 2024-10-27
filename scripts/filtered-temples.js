//Nav bar
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click', () =>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

//temple objects
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },


    // Add more temple objects here...
  ];


  // ***********************************     Filters    ********************************************//

//Home


//Older
createTempleCard();

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0])< 1900);
    createTempleCard(oldTemples);

})

//Newer
createTempleCard();

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
    createTempleCard(newTemples);

})

//Larger
createTempleCard();
const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => parseInt(temple.area) > 90000);
    createTempleCard(largeTemples);
})

//Smaller
createTempleCard();

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => parseInt(temple.area) < 9000);
    createTempleCard(smallTemples);
})


  // ***********************************     Home layout cards     *****************************************//


function createTempleCard(filteredTemples = temples) {
    const templeContainer = document.querySelector(".firstthree");
    templeContainer.innerHTML = "";
    
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".firstthree").appendChild(card);
    });
}


//Footer
const year = document.querySelector("#currentyear")

const today = new Date();

const fullname = "Oscar Vanegas";
const separator = " - ";
const country = "Nicaragua";

year.innerHTML = `${today.getFullYear()} ${fullname} ${separator} ${country}`;



const modified = document.querySelector("#lastmodified")
    
let modificationDate = new Date(document.lastModified);

const alert = "Last Modification"
const symbol = ": "

modified.innerHTML = `${alert} ${symbol} ${modificationDate}`