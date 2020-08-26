document.addEventListener("DOMContentLoaded", e => {

    function incrementCounter() {
        let counterTime = document.getElementById('counter').textContent
        counterTime = parseInt(counterTime, 10);
        document.getElementById('counter').textContent = counterTime + 1
    }
    let myVar = setInterval(incrementCounter, 1000)


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
    pauseBtn.dataset.onSwitch = "true"
    clickables = document.getElementsByTagName("button")
    function resumeTimer() {
        if (pauseBtn.dataset.onSwitch === "false") {
            pauseBtn.addEventListener("click", e => {
                // clearTimeout(incrementCounter)

                // clearInterval(myVar)
                myVar = setInterval(incrementCounter, 1000)
                pauseBtn.innerText = 'pause'
                pauseBtn.dataset.onSwitch = "true"

                for (let i = 0; i < clickables.length; i++) {
                    clickables[i].disabled = false
                }
                pauseBtn.removeEventListener
                pauseBtn.addEventListener('click', pauseTimer())
            })
        }
    }
    function pauseTimer() {
        if (pauseBtn.dataset.onSwitch === "true") {
            pauseBtn.addEventListener('click', e => {
                clearInterval(myVar)
                pauseBtn.innerText = 'resume'
                pauseBtn.dataset.onSwitch = "false"

                for (let i = 0; i < clickables.length; i++) {
                    clickables[i].disabled = true
                }
                pauseBtn.removeEventListener
                resumeBtn = document.getElementById("pause").disabled = false
                pauseBtn.addEventListener('click', resumeTimer())
            })
        }
    }


    pauseTimer()
    resumeTimer()

    let form = document.getElementById('comment-form')
    let commentDiv = document.getElementById("list")
    form.addEventListener('submit', e => {
        e.preventDefault()
        let comment = document.createElement('p')

        comment.innerText = form.comment.value

        commentDiv.append(comment)


    })

})