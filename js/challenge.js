document.addEventListener("DOMContentLoaded", function(e){
  
  let startTime = Date.now()
  let elapsedTime = 0

  const counter = document.querySelector("#counter")
    let timeout

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime)
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
        elapsedTime += Date.now() - startTime
        pauseButton.innerText = "resume"
        buttons[0].disabled = true
        buttons[1].disabled = true
<<<<<<< HEAD
        buttons[2].disabled = true}
=======
        buttons[2].disabled = true
      }
>>>>>>> 3876dc4587624be1bf3bd55c160c59efc7a2938c

    function resumeEverything() {
        let currentSecond = parseInt(counter.innerText, 10)
        startTime = new Date(Date.now() - currentSecond)
        countUp()
        pauseButton.innerText = "pause"
        buttons[0].disabled = false
        buttons[1].disabled = false
        buttons[2].disabled = false
<<<<<<< HEAD

=======
>>>>>>> 3876dc4587624be1bf3bd55c160c59efc7a2938c
    }


        pauseButton.addEventListener("click", function(e) {
            if (pauseButton.innerText === "pause") {pauseEverything()}
            else {resumeEverything()}
        })
    
    const commentForm = document.querySelector('#comment-form')
    commentForm.addEventListener('submit', function(e) {
      e.preventDefault()
      const input = document.querySelector('#comment-input')
      const commentDiv = document.querySelector('#list')
      const commentUl = document.createElement('ul')
      commentDiv.append(commentUl)
      const commentLi = document.createElement('li')
      commentUl.append(commentLi)
      commentLi.innerText = input.value
    })

})

















// secondAdder()

