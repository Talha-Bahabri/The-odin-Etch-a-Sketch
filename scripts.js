    
    let userInputSize = 16;
    const sketchDivSelector = document.querySelector(".sketch-div");
    let cursorColor = `black`;


function createDivs () {
    sketchDivSelector.style.gridTemplateColumns = `repeat(${userInputSize}, auto)`;
    sketchDivSelector.style.gridTemplateRows = `repeat(${userInputSize}, auto)`;
 
    for (i=1 ; i <= userInputSize*userInputSize ; i++) {

        // div1 stands for the indivisual boxes inside the sketch div.
        div1 = document.createElement("div");
        div1.style.cssText = `background-color: white`; 

        div1.classList.add('block'); 
        sketchDivSelector.append(div1);

        //Added the hover function and clr button here so it can affect every div block
        hoverChangeColor(div1);
        clrButton(div1);

    }
    
}

  function hoverChangeColor(div1) {
    div1.addEventListener( "mouseenter", () => {
        if (cursorColor == `black`) {
            div1.style.cssText = `background-color: black`; 

        }
        else {
            div1.style.cssText =`background-color: ${getRandomColor()}`;
        }

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

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

    function randomColorsButton() {
        const randomColorsButton = document.querySelector(`.randomColors`);
        const activatedRandomColors = document.querySelector(`.activatedRandomColors`);

        randomColorsButton.addEventListener("click" , () => {

            if (cursorColor == `black`) {
                cursorColor = `random`;
                activatedRandomColors.textContent = `Random Colors : ON`;
            }
            else {
                cursorColor =`black`;
                activatedRandomColors.textContent = `Random Colors : OFF`;
            }
          });


    }
  

createDivs();
reSizeButton();
randomColorsButton();



