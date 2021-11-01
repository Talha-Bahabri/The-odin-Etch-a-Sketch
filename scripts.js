function createDivs () {
    const sketchDivSelector = document.querySelector(".sketch-div");

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");

    const par1 = document.createElement("p");
    const par2 = document.createElement("p");

    par1.textContent = "yepo";
    par2.textContent = "heeo";

    div1.style.cssText = "background-color: green";   
    div2.style.cssText = "background-color: red";   
    div1.classList.add('block'); 
    div2.classList.add('block'); 
    

    div1.append(par1);
    div2.append(par2);

    sketchDivSelector.appendChild(div1);
    sketchDivSelector.appendChild(div2);

}
console.log("this is before create");
createDivs();

console.log("this is after create");