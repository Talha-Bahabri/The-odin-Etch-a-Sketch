function createDivs () {
    const sketchDivSelector = document.querySelector(".sketch-div");

    userInputSize = prompt ("how many .. only numbers");

    sketchDivSelector.style.gridTemplateColumns = `repeat(${userInputSize}, auto)`;
    sketchDivSelector.style.gridTemplateRows = `repeat(${userInputSize}, auto)`;

    for (i=1 ; i <= userInputSize*userInputSize ; i++) {
        let div1 = document.createElement("div");
        
        div1.style.cssText = `background-color: ${getRandomColor()}`; 

        div1.classList.add('block'); 
        sketchDivSelector.appendChild(div1);
        hoverChangeColor(div1)
        clrButton(div1)

    }
    
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  function hoverChangeColor(div1) {
    div1.addEventListener( "mouseenter", () => {
        div1.style.cssText = `background-color: black`;
      });

  }

  function clrButton(div1) {
      const clrButton = document.querySelector(`.clrButton`);

      clrButton.addEventListener("click" ,  () => {
        div1.style.cssText = `background-color: gray`;
      });

  }


  
console.log("this is before create");

createDivs();

console.log("this is after create");




