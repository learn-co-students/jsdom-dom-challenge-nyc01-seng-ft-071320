document.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('#counter')
  let seconds = 0
  let likesNum = 1;
  let prevSecond = 0
  let paused = false;

  function incrementSeconds() {
    if (paused == false) {
      seconds += 1;
      counter.innerHTML = seconds;
      } 
    }

  setInterval(incrementSeconds, 1000);
    

  function clickHandler() {
    const likesContainer = document.querySelector('.likes')
    document.addEventListener('click', function(e) {
      if (e.target.matches('#minus')) {
        seconds--
        counter.innerHTML = seconds;
      } else if (e.target.matches('#plus')) {
        seconds++
        counter.innerHTML = seconds;
      } else if (e.target.matches('#heart')) {
        let li = document.createElement('li')
        if (prevSecond === seconds) {
          let lastLikeSent = likesContainer.lastChild.textContent.split(' ')
          let lastLikeNum = parseInt(lastLikeSent[4])
          debugger
          lastLikeNum++
          let incrementedNumber = lastLikeNum
          lastLikeSent[4] = incrementedNumber
          lastLikeSent =  lastLikeSent.join(" ");
          

          likesContainer.lastChild.innerText = lastLikeSent
          likesContainer.append(li)
        } else {
          li.innerText = `${seconds} has been liked ${likesNum} times.`
          likesContainer.append(li)
          prevSecond = seconds 
        }

      } else if (e.target.matches('#pause')) {
        let pauseButton = document.querySelector('#pause')
        paused = !paused
        if(paused == true) {
          pauseButton.innerText = 'resume'
        } else {
          pauseButton.innerText = 'pause'
        }
      }
    })

  }

  clickHandler()
  incrementSeconds()
})





