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

