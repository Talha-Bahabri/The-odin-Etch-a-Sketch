function createDivs () {
    const sketchDivSelector = document.querySelector(".sketch-div");

    userInputSize = prompt ("how many .. only numbers");


    for (i=1 ; i <= userInputSize*userInputSize ; i++) {
        let div1 = document.createElement("div");
        let par1 = document.createElement("p");
        par1.textContent = "yepo";
        div1.style.cssText = "background-color: pink";  
        div1.classList.add('block'); 
        div1.append(par1);
        sketchDivSelector.appendChild(div1);

    }
    
    

}
console.log("this is before create");
createDivs();

console.log("this is after create");





// const sketchDivSelector = document.querySelector(".sketch-div");

//     const div1 = document.createElement("div");
//     const div2 = document.createElement("div");
//     const div3 = document.createElement("div");
//     const div4 = document.createElement("div");
//     const div5 = document.createElement("div");

//     const par1 = document.createElement("p");
//     const par2 = document.createElement("p");
//     const par3 = document.createElement("p");
//     const par4 = document.createElement("p");
    


//     par1.textContent = "yepo";
//     par2.textContent = "heeo";
//     par3.textContent = "poooo";
//     par4.textContent = "sheeee";

//     div1.style.cssText = "background-color: green";   
//     div2.style.cssText = "background-color: red";  
//     div3.style.cssText = "background-color: blue";   
//     div4.style.cssText = "background-color: yellow";  
//     div4.style.cssText = "background-color: pink";   
//     div1.classList.add('block'); 
//     div2.classList.add('block'); 
//     div3.classList.add('block'); 
//     div4.classList.add('block'); 
//     div5.classList.add('block'); 
    

//     div1.append(par1);
//     div2.append(par2);
//     div3.append(par3);
//     div4.append(par4);
//     div5.append(par4);

//     sketchDivSelector.appendChild(div1);
//     sketchDivSelector.appendChild(div2);
//     sketchDivSelector.appendChild(div3);
//     sketchDivSelector.appendChild(div4);
//     sketchDivSelector.appendChild(div5);