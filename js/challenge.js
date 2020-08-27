// As a user, I should see the timer increment every second once the page has loaded.
// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

document.addEventListener('DOMContentLoaded', function(e){

    //create a counter variable that will find the coutner item in the index.html
    let counter = document.querySelector("#counter");

    //create a variable that will turn the contents of 'counter' into an integer
    let time = parseInt(counter.textContent, 10);

    //create a function that will increment the time
    function incrementTime() {
        time++;
        counter.textContent = time;
    }

    //create a variable that will act as the timer 
    let timer = setInterval(incrementTime, 1000);


    // Now, create logic to give functionality to the 'minus', 'plus', 'heart' buttons
        // since the buttons are within an 'h1' within the body, let's grab the body element first
    const body = document.querySelector('body');
        // then lets grab the area where each instance of a like would be located
    const ul = document.querySelector('ul.likes');

        // add an event listener for the body, to keep track of the clicks
    body.addEventListener("click", function(e){
        if (e.target.matches("button#minus")) {
            time--; // the time will decrement by 1 when the minus button is clicked
        } else if (e.target.matches("button#plus")) {
            time++; // the time will increment by 1 when the plus button is clicked 
        } else if (e.target.matches("button#heart")) {
                // since this will be an area where there will be a 'collection' of
                // 'like' instances. Let's create an empty array first.
            let array = [];

                // then let's create a variable that will have access to all of the 'li'
                // instances that we are looking for
            let liArray = ul.querySelectorAll('li');

                // now for each of these 'li' instances, we need to push them into
                // our empty array
            liArray.forEach(li =>{
                array.push(li.className)
            });

            // if the array happens to include a value equivialent to the 'time'
            if (array.includes(`${time}`)) {
                    // create a variable that will take only the class, which is the 'time' value
                let ourLi = ul.getElementsByClassName(`${time}`)[0];

                    //then create another variable that will replace the string with an empty string
                let grabbedLikes = ourLi.textContent.replace(`${time} has been liked`, "");

                    //create the 'likes' variable that will rep the integer value of 'grabbedLikes'
                let likes = parseInt(grabbedLikes, 10);

                    //increment the likes
                likes++;
                    
                    //create the content for the 'ourLi' variable
                ourLi.textContent = time + " has been liked " + likes + " times";
            } else {
                    // otherwise, if a second has only been likes 1 time, use the following
                    // this method will add the 'li' element right before the end of the 'ul'
                ul.insertAdjacentHTML('beforeend', `<li class="${time}">${time} has been liked 1 time</li>`);

            }
        } else if (e.target.matches('button#pause')) {
            const pauseButton = body.querySelector('button#pause');

            if (pauseButton.innerText === "pause") {
                clearInterval(timer)
                pauseButton.innerText = "resume";
            } else if (pauseButton.innerText == "resume") {
                timer = setInterval(incrementTime, 1000)
                pauseButton.innerText = "pause";
            };
        }
    });

    // create a variable that will rep the form itself

    const form = document.querySelector('form')

    form.addEventListener('submit', function(e){
        e.preventDefault(); //to prevent the page from reloading each time
        
        let comment = e.target[0].value
        let tag = document.createElement("p")
        tag.textContent = comment

        let commentsList = document.querySelector('div#list')
        commentsList.append(tag)
        form.reset()
    })
})