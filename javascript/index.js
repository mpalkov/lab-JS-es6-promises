// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*   getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
 */


// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li><i>Callback Hell</i> potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        })
      })
    })
  })
});

// Iteration 2 - using promises
obtainInstruction('steak', 0)
.then( (step) => {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  return obtainInstruction('steak', 1)
})
.then( (step) => {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  return obtainInstruction('steak', 2)
})
.then( (step) => {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  return obtainInstruction('steak', 3)
})
.then( (step) => {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  return obtainInstruction('steak', 4)
})
.then( (step) => {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  return obtainInstruction('steak', 5)
})
.then( (step) => {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  return obtainInstruction('steak', 6)
})
.then( (step) => {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  return obtainInstruction('steak', 7)
})
.then( (step) => {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  document.querySelector("#steak").innerHTML += `<li>The <i>promised</i> steak is ready!</li>`;
  document.querySelector("#steakImg").removeAttribute("hidden");
})
.catch( (error) => console.error(error));

// Iteration 3 using async/await
async function makeBroccoli() {
  console.log("ASYNC BROCCOLI");
  try {
    for (let i = 0; i < broccoli.length; i++) {
      // console.log("loop ", i);
      const step = await obtainInstruction('broccoli', i);
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
      if (i === broccoli.length - 1) {
        document.querySelector("#broccoli").innerHTML += `<li>The <i>awaited</i> broccoli is ready!</li>`;
        document.querySelector("#broccoliImg").removeAttribute("hidden");
      }
    }
  }
  catch {
    console.log("ERROR");
  }
}
makeBroccoli();

// Bonus 2 - Promise all
const step0 = new obtainInstruction("brusselsSprouts", 0);
const step1 = new obtainInstruction("brusselsSprouts", 1);
const step2 = new obtainInstruction("brusselsSprouts", 2);
const step3 = new obtainInstruction("brusselsSprouts", 3);
const step4 = new obtainInstruction("brusselsSprouts", 4);
const step5 = new obtainInstruction("brusselsSprouts", 5);
const step6 = new obtainInstruction("brusselsSprouts", 6);
const step7 = new obtainInstruction("brusselsSprouts", 7);

Promise.all([step0, step1, step2, step3, step4, step5, step6, step7])
  .then((values) => {
    console.log(values);
    values.forEach(element => {
      console.log("element ", element);
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${element}</li>`;
    });
  })
  .then(() => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li><i>All</i> brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((error) => {
    console.error(error);
  })