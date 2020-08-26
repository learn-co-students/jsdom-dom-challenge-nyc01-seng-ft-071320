document.addEventListener("DOMContentLoaded", e => {

    function incrementCounter() {
        let counterTime = document.getElementById('counter').textContent
        counterTime = parseInt(counterTime, 10);
        document.getElementById('counter').textContent = counterTime + 1
    }
    let myVar = setInterval(incrementCounter, 1000)
    let timerGoing = true

    let plus = document.getElementById("plus")
        .addEventListener("click", () => {
            let counterTime = document.getElementById('counter').textContent
            counterTime = parseInt(counterTime, 10);
            document.getElementById('counter').textContent = counterTime + 1
        })
    let minus = document.getElementById("minus")
        .addEventListener("click", () => {
            let counterTime = document.getElementById('counter').textContent
            counterTime = parseInt(counterTime, 10)
            document.getElementById('counter').textContent = counterTime - 1
        })

    function addLike() {
        let ul = document.getElementsByClassName('likes')[0]
        let lis = Array.from(document.querySelectorAll('li'))
        let liNums = lis.map(li => li.dataset.num)
        let counterTime = document.getElementById('counter').innerHTML
        if (liNums.includes(counterTime)) {
            document.querySelector(`li[data-num="${counterTime}"] span`).textContent = parseInt(document.querySelector(`li[data-num="${counterTime}"] span`).textContent, 10) + 1
        } else {
            let like = document.createElement('li')
            like.dataset.num = counterTime
            like.innerHTML = `
            ${counterTime} has been like <span>1</span> time
            `
            ul.append(like)
        }
    }

    document.getElementById('heart').addEventListener("click", addLike)

    let pauseBtn = document.querySelector('#pause')
    clickables = document.getElementsByTagName("button")

    pauseBtn.addEventListener('click', e => {
        if (timerGoing) {
            clearInterval(myVar)
            pauseBtn.innerText = 'pause'
            for (let i = 0; i < clickables.length; i++) {
                clickables[i].disabled = true
            }
            pauseBtn.disabled = false
            timerGoing = false
        } else {
            myVar = setInterval(incrementCounter, 1000)
            pauseBtn.innerText = 'resume'
            for (let i = 0; i < clickables.length; i++) {
                clickables[i].disabled = false
            }
            timerGoing = true
        }
    })


    let form = document.getElementById('comment-form')
    let commentDiv = document.getElementById("list")
    form.addEventListener('submit', e => {
        e.preventDefault()
        let comment = document.createElement('p')

        comment.innerText = form.comment.value

        commentDiv.append(comment)


    })

})