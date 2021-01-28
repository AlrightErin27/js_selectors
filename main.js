console.log('successfully linked!')

// For each prompt, perform the specified selection. Save the result to a variable, then console.log that variable. Confirm that it contains what it should in the console!

// 1) All img tags
const imgs = document.querySelectorAll("img")
console.log(imgs)
// 2) All section tags
const sectionA = document.querySelectorAll("section")
console.log(sectionA)
// 3) The element with an id of section-1
const elementId = document.querySelector("#section-1")
console.log(elementId)
// 4) The element with an id of destinations-button
const elementDestButt = document.querySelector("#destinations-button")
console.log(elementDestButt)
// 5) The first element with a class of images-rack
const elementImagesRack = document.querySelector(".images-rack")
console.log(elementImagesRack)
// 6) The first h1 tag
const tagOne = document.querySelector("h1")
console.log(tagOne)
// 7) All elements with a class of image-card
const mooMoo = document.querySelectorAll(".image-card")
console.log(mooMoo)
// 8) All elements with a class of over-image-text
const mooBoo = document.querySelectorAll(".over-image-text")
console.log(mooBoo)

