const year = <HTMLParagraphElement> document.getElementById("year")
const thisYear = new Date().getFullYear().toString()

year.setAttribute("datetime", thisYear)
year.textContent = thisYear