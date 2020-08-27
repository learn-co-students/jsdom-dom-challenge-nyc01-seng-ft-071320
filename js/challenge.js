document.addEventListener("DOMContentLoaded", function(e){
  
  let startTime = Date.now()

  const counter = document.querySelector("#counter")
    let timeout

  function countUp() {
    const d = new Date(Date.now() - startTime)
    const s = d.getSeconds()
    counter.innerText = s
    timeout = setTimeout(() => {
      countUp();
    }, 1000);
  }
  countUp()

  
  function moreTime() {
      const plusButton = document.querySelector('#plus')
      plusButton.addEventListener('click', function(e) {
        let currentTime = counter.innerText
        let currentTimeNum = parseInt(currentTime, 10)
          let banana = currentTimeNum += 1
          counter.innerText = banana
      })
    }
    moreTime()


    function lessTime() {
        const minusButton = document.querySelector('#minus')
        minusButton.addEventListener('click', function(e) {
            let currentTime = counter.innerText
            let currentTimeNum = parseInt(currentTime, 10)
            let banana = currentTimeNum -= 1
            counter.innerText = banana
        })
      }
      lessTime()



    function addingLikes() {   
        const likeUl = document.querySelector('.likes')
        const heart = document.querySelector('#heart')
        let likeCount = 0
        const likeLi = document.createElement("li")
        likeUl.append(likeLi)
        heart.addEventListener("click", function(e) {
        let currentLikeCount = likeCount += 1
        likeLi.innerText = currentLikeCount
        })
        }
    addingLikes()


    const pauseButton = document.querySelector('#pause')
    const buttons = document.querySelectorAll("button")
    
    function pauseEverything(){ 
        clearTimeout(timeout)
        pauseButton.innerText = "resume"
        buttons[0].disabled = true
        buttons[1].disabled = true
        buttons[2].disabled = true}

    function resumeEverything() {
        let currentSecond = parseInt(counter.innerText, 10)
        startTime = Date.now()
        countUp()
        pauseButton.innerText = "pause"
        buttons[0].disabled = false
        buttons[1].disabled = false
        buttons[2].disabled = false

    }


        pauseButton.addEventListener("click", function(e) {
            if (pauseButton.innerText === "pause") {pauseEverything()}
            else {resumeEverything()}
        })
    


})

















// secondAdder()

