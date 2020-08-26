// As a user, I should see the timer increment every second once the page has loaded.
// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.


document.addEventListener('DOMContentLoaded', function(e){

// console.log(typeof time);
let counter = document.querySelector("h1#counter");
let time = parseInt(counter.textContent, 10);



function incrementTime() {
    time ++;
    counter.textContent = time;   
}



let timer = setInterval(incrementTime, 1000);

const body = document.querySelector('body');
const ul = document.querySelector('ul.likes');
body.addEventListener('click', function (e){
    
    if (e.target.matches('button#minus')) {
        time --;
    } else if (e.target.matches('button#plus')) {
        time ++;
    } else if (e.target.matches('button#heart')){ 
        let array = [];  
        let liArray = ul.querySelectorAll('li');

        liArray.forEach(li => {
            array.push(li.className) 
        })
    
        if (array.includes(`${time}`)) {
            let ourLi = ul.getElementsByClassName(`${time}`)[0];
            let grabbedLikes = ourLi.textContent.replace(`${time} has been liked`, "");
            let likes = parseInt(grabbedLikes, 10);
            likes ++;
            ourLi.textContent = time + " has been liked " + likes + " times";
        }

        else {
            ul.insertAdjacentHTML('beforeend', `<li class="${time}">${time} has been liked 1 times</li>`); 
        }   
        
    } else if (e.target.matches('button#pause')) {
        const pauseButton = body.querySelector('button#pause');
        if (pauseButton.innerText === "pause") {
            clearInterval(timer)
            pauseButton.innerText = "resume";
        } else if (pauseButton.innerText === "resume") {
            timer = setInterval(incrementTime, 1000)
            pauseButton.innerText = "pause";
        }
    }
});

    const form = document.querySelector('form') 
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log(e)
        let comment = e.target[0].value
        let tag = document.createElement("p")
        tag.textContent = comment
        let commentsList = document.querySelector('div#list')
        commentsList.append(tag)
        form.reset()
        
    });



})




//They are able to click the button
//We need to grab the current time and either create a new li or update that time's likes
