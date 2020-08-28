document.addEventListener("DOMContentLoaded", () => {
//DOM established up top

    const counter = document.querySelector('#counter')
    //counter is the main thing that we are manipulating

    function counterUp2 () {
        setInterval(function(){
          counter.textContent++;
        }, 1000);
    }

    function counterUp() {
        setInterval(function(){
            if (document.querySelector('#pause').innerText=="resume") counter.textContent;
            else {counter.textContent++};
        }, 1000);
    } 

    function clickHandler() {
        let toggle = document.querySelector('#pause').innerText
        document.addEventListener('click', function(e){
            console.log(e.target)
            if(e.target.matches("#plus") && toggle=="resume"){
            counter.textContent++;
            } else if(e.target.matches('#minus' && toggle=="resume")){
            counter.textContent = counter.textContent - 1;
            } else if(e.target.matches('#pause')){
            if (toggle == "pause"){document.querySelector('#pause').innerText="resume"}
            else if (toggle == "resume"){document.querySelector('#pause').innerText="pause"}
            } else if(e.target.matches('#heart') && toggle=="resume"){
                let topList = document.querySelector(".likes")
                if (!topList.hasChildNodes()) {
                    listElement=document.createElement("li")
                    listElement.textContent=`${counter.textContent} has been liked 1 time`
                    topList.appendChild(listElement)
                } else if (topList.hasChildNodes()) {
                    let lastChild = document.querySelectorAll('li')[document.querySelectorAll('li').length- 1]
                    let currentNum =parseInt(lastChild.innerText)
                    if (currentNum == counter.textContent) {
                        let times = parseInt(lastChild.textContent.split(' ')[4])+1
                        lastChild.textContent=`${counter.textContent} has been liked ${times} times`
                    }
                    else{
                        listElement=document.createElement("li")
                        listElement.textContent=`${counter.textContent} has been liked 1 time`
                        topList.appendChild(listElement)
                    }
                }
            }
            else {
                
          }
        }) 
      }

    //   function pauseHandler() {
    //     document.addEventListener('click', function(e){
    //         if (e.target.matches('#pause')){
                        
    //         }
    //     })
    // }
      counterUp()
      clickHandler()
    // pauseHandler()
    
})