// Your code here
// let dodger = document.querySelector("#dodger");
// console.log(dodger)
// makes dodger the color black.
// dodger.style.backgroundColor = '#000000'

// makes dodger the color pink
// dodger.style.backgroundColor = '#FF69B4'

// bottom lefft of black box is 0,0
// console.log(dodger.style.left); // 180px
// console.log(dodger.style.bottom); // 0px

// moves dodger UP 100px's
// dodger.style.bottom = '100px'

// returns dodger to where we started 
// dodger.style.bottom = "0px"

// value of left arrow key,eneter in console 
// document.addEventListener("keydown", function(e) {
//     console.log(e.key);
//   });


// move dodger to the left 
// document.addEventListener("keydown", (e) => {
//     if (e.key === "ArrowLeft") { // keydown equals ArrowLeft
//       let leftNumbers = dodger.style.left.replace("px", "");
//       let left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left - 1}px`;
//     }
//   }); 

// update dodgers position
let dodger = document.querySelector("#dodger");

  
// event listener to ArrowLeft and ArrowRight
document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
})


  // Callback function to move dodger left
  function moveDodgerLeft() {
      let leftNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumbers, 10);

      if (left > 0) {
          dodger.style.left = `${left - 10}px`
      }
  }

// Callback function to move dodger right
function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers, 10);

    if (right < 360) {
        dodger.style.left = `${right + 10}px`
    }
}

