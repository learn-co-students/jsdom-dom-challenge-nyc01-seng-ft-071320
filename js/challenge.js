
const counter = document.getElementById('counter')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const pauseButton = document.getElementById('pause')
const likeButton = document.getElementById('heart')
const ulElement = document.querySelector('ul')
const commentSection = document.querySelector('#list')
const subBtn = document.querySelector('#submit')
const form = document.getElementById('comment-form')

function addCounter(){
  let num = parseInt(counter.innerText, 10)
  num += 1
  counter.innerText = num
}
function minusCounter(){
  let num = parseInt(counter.innerText, 10)
  num -= 1
  counter.innerText = num
}


plusButton.addEventListener('click', e => {
  addCounter()
})
minusButton.addEventListener('click', e => {
  minusCounter()
})

let startTime = setInterval(addCounter, 1000)
let myInterval = 0

pauseButton.addEventListener('click', e => {
  clearTimeout(startTime)
  if (myInterval === -1){
    pauseButton.innerText = "pause"
    plusButton.disabled = false
    minusButton.disabled = false
    likeButton.disabled = false
    myInterval = setInterval(addCounter, 1000)
  } else {
    clearInterval(myInterval)
    pauseButton.innerText = "resume"
    plusButton.disabled = true
    minusButton.disabled = true
    likeButton.disabled = true
    myInterval = -1
  }
})


likeButton.addEventListener('click', e =>{
  const cntValue = counter.innerText
  const array = Array.from(document.querySelectorAll('li'))
  let newArray = []
  let newArray2 = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].innerText.split(" - "))
  }
  for (let i = 0; i < newArray.length; i++) {
    newArray2.push(newArray[i].splice(1))
  }


  if (newArray.flat().includes(cntValue)){
    let liTags = Array.from(document.getElementsByTagName("li"));
    let found;
    for (let i = 0; i < liTags.length; i++) {
      if (liTags[i].innerText.substring(1,0) == cntValue || liTags[i].innerText.substring(2,0) == cntValue || liTags[i].innerText.substring(3,0) == cntValue) {
        found =liTags[i]
        break;
      }
    }
    let splitArray = found.innerText.split(' - ')
    let lastNum = parseInt(splitArray[1], 10)
    found.innerText = `${cntValue} - ${lastNum += 1}`
    
  } else {
    const newLi = document.createElement('li')
    let likeNumber = 1
    newLi.innerHTML = `
    ${counter.innerText} - ${likeNumber}
    `
    ulElement.append(newLi)
  }
})



form.addEventListener('submit', e => {
  e.preventDefault()
  const newP = document.createElement('p')
  const comment = form.comment.value
  newP.innerText = comment
  commentSection.append(newP)
})
