document.addEventListener("DOMContentLoaded", (e) => {
  let counter = document.querySelector("#counter");
  const currentNumber = counter.textContent;

  //   console.log(typeof counter.textContent);

  function incrementCounter() {
    counter.textContent = parseInt(counter.textContent) + 1;
  }

  function decrementCounter() {
    counter.textContent = parseInt(counter.textContent) - 1;
  }

  setInterval(function () {
    incrementCounter();
  }, 1000);

  document.addEventListener("click", (e) => {
    const minus = document.querySelector("#minus");
    const plus = document.querySelector("#plus");
    const heart = document.querySelector("#heart");
    if (e.target === minus) {
      decrementCounter();
    } else if (e.target === plus) {
      incrementCounter();
    } else if (e.target === heart) {
      // likeCounter();
      const li = document.createElement("li");
      li.innerHTML = `${currentNumber} has been liked <span>${likeCounter()}</span> time.`;
      const likes = document.querySelector(".likes");
      likes.append(li);
    }

    // change currentNumber to an integer
    // setAttribute
    // console.log(likes.appendChild(likeLi));
  });
});

// function likeCounter() {
//   let likesObj = {};
//   const likesContainer = document.querySelector(".likes");
// const like = document.createElement("li");
// likesContainer.append(like);
// // currentNumber = parseInt(counter.innerText);
// if (!likesObj[currentNumber]) {
//   likesObj[currentNumber] = 0;
//     like.innerHTML = `${currentNumber} has been liked.`;
//   } else {
//     likesObj[currentNumber] += 1;
//     like.innerHTML = `${currentNumber} has been liked ${likesObj[currentNumber]} times.`;
//   }
// }
