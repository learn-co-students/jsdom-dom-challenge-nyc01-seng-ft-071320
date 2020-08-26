document.addEventListener('DOMContentLoaded', function(e){
    // write function to increment Counter 
    // DONE increment the counter every second 
    // add event listeneres to the buttons 
    // add list of number of likes
    // create a comment element
    // add comments
    let counter = document.querySelector('#counter');
    function incrementCounter() {
        counter.innerText = parseInt(counter.innerText, 10) + 1
    } 
    function decrementCounter() {
        counter.innerText = parseInt(counter.innerText, 10) - 1
    } 
    let ul = document.querySelector(".likes")
    let ulChildren = ul.children
    // function likeTracker(counterNumber){
    //     // let numbers = document.querySelector(".likes")
    //     likes = 1      
    //     for (let i = 0; i<ulChildren.length; i++) {
    //         if (counterNumber === parseInt(ulChildren[i].innerText)) {
    //             newLikes = likes + 1
    //             list.innerText = `${counterNumber} - ${newLikes} likes`
    //         }
    //         else {
    //             let li = document.createElement('li')
    //             li.innerHTML = `${counter.innerText} - ${likes} likes`
    //             ul.append(li)
    //         }
    //     }
    //             console.log(likes);
    // }
    function disableButtons(){
        const stopMinus = document.getElementById('minus').disabled = true;
        const stopPlus = document.getElementById('plus').disabled = true;
        const stopLike = document.getElementById('heart').disabled = true;
    }
    function enableButtons(){
        const startMinus = document.getElementById('minus').disabled = false;
        const startPlus = document.getElementById('plus').disabled = false;
        const startLike = document.getElementById('heart').disabled = false;
    }
    const pauseButton = document.querySelector("#pause")
    const ulComment = document.querySelector('#comment-list')
    function clickHandler() {
        let buttons = document.querySelectorAll('button');
        console.log(buttons)
        for (button of buttons){
            button.addEventListener('click', function(e) {
                  e.preventDefault()
            if (e.target.matches("#plus")){
                incrementCounter();
            }
            if (e.target.matches("#minus")){
                decrementCounter();
            }   
            // if (e.target.matches("#heart")){
            //     likeTracker(counter.innerText);
            // }
            if (e.target.matches('#pause')){
                window.clearInterval(iCounterTimer)
                pauseButton.innerText = "resume"
                pauseButton.id = "resume"
                disableButtons()
                pauseButton.addEventListener("click",function(e){
                    enableButtons()
                    counter.innerText = 0
                    pauseButton.innerText = "pause"
                    pauseButton.id = "pause"
                    window.setInterval(incrementCounter, 1000)
                });
            }
        });
    }
    }
    commentForm = document.querySelector('#comment-form')
    comment = commentForm.lastElementChild
    comment.addEventListener('click', function(e) {
        let com = commentForm.firstChildElement
        console.log(com)
        commentBullet = document.createElement('li')
        commentBullet.innerText = com
        ulComment.append(commentBullet)
    });
    
    iCounterTimer = window.setInterval(incrementCounter, 1000);
    clickHandler()
     })