    
    userInputSize = 16;
    const sketchDivSelector = document.querySelector(".sketch-div");

    cursorColor = `black`;
    

function createDivs () {
    sketchDivSelector.style.gridTemplateColumns = `repeat(${userInputSize}, auto)`;
    sketchDivSelector.style.gridTemplateRows = `repeat(${userInputSize}, auto)`;

    for (i=1 ; i <= userInputSize*userInputSize ; i++) {
        div1 = document.createElement("div");
        
        div1.style.cssText = `background-color: white`; 

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
        div1.style.cssText = `background-color: ${cursorColor}`;
      });

  }

  function clrButton(div1) {
      const clrButton = document.querySelector(`.clrButton`);

      clrButton.addEventListener("click" ,  () => {
        div1.style.cssText = `background-color: white`;
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

        while(true) {
            userInputSize = prompt (`Enter a number which is not above 100`);
            if (userInputSize > 100) {
                continue;
            }
            else{
                break;
            }
        }

        createDivs();
      });
  }



    function randomColorsButton() {
        const randomColorsButton = document.querySelector(`.randomColors`);
        randomColorsButton.addEventListener("click" , () => {
            cursorColor = `${getRandomColor()}`;
          });
    }
  
createDivs();
reSizeButton()
randomColorsButton()



