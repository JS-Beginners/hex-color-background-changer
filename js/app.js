
let textTarget = document.getElementById("hex-value");
let bodyBackgroundReference = document.body.style;
let triggerButton = document.getElementById(id="btn");


triggerButton.addEventListener('click', (function(){
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  return function(){
    let hex = '#'
    for(let i = 0; i < 6; i++){
      let index = Math.floor(Math.random() * hexValues.length);
      hex += hexValues[index]
    }
     bodyBackgroundReference.background = hex;
     textTarget.textContent = hex;
     
  }

}()))