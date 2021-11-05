    
    userInputSize = 16;
    const sketchDivSelector = document.querySelector(".sketch-div");

function createDivs () {

    if (userInputSize == 16 ) {
        console.log(`the userinput is 16`)
    }
    else {
        userInputSize = prompt ("how many .. only numbers");
    }

    sketchDivSelector.style.gridTemplateColumns = `repeat(${userInputSize}, auto)`;
    sketchDivSelector.style.gridTemplateRows = `repeat(${userInputSize}, auto)`;

    

    for (i=1 ; i <= userInputSize*userInputSize ; i++) {
        div1 = document.createElement("div");
        
        div1.style.cssText = `background-color: ${getRandomColor()}`; 

        div1.classList.add('block'); 
        sketchDivSelector.append(div1);

        
        hoverChangeColor(div1);
        clrButton(div1);

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


  function reSizeButton() {
      const reSizeButton = document.querySelector(`.reSize`);

        reSizeButton.addEventListener("click" , () => {
        
        for (i=1 ; i <= userInputSize*userInputSize ; i++) {
            divRemove = document.querySelector(`.block`);
            sketchDivSelector.removeChild(divRemove);

        }
        
        userInputSize = 0 ;
        createDivs();
      });


  }


  
console.log("this is before create");
createDivs();

reSizeButton()
console.log("this is after create");




