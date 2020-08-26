document.addEventListener("DOMContentLoaded", function(e){
  
  let startTime = Date.now()

  const counter = document.querySelector("#counter")

  function countUp() {
    const d = new Date(Date.now() - startTime)
    const s = d.getSeconds()
    console.log(s)
    counter.innerText = s
    setTimeout(() => {
      countUp();
    }, 1000);
  }
  countUp()

})


    // function secondAdder() {
    //     let counter = document.querySelector("#counter").innerText
    //     let countNum = parseInt(counter, 10)
    //     let newNum = counter += 1
    //     counter = newNum.toString()
    //     console.log(counter)
    // }

//    window.setInterval(secondAdder, 1000)














// secondAdder()
