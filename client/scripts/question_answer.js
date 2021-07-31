const answerDisplay = document.querySelector("#answer-display")
const questionDisplay = document.querySelector("#question-display")

function renderQustion() {
  document.querySelector("#question-display").innerHTML = `
    <section class="question-display-container">
      <div class="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?</div>
      <div class="hint">
        <span class="material-icons">help</span><div class="hint">Hint</div>
      </div>
      <button onClick="render('answer')">Answer</button>
    </section>
  `
}
renderQustion()

// document.querySelector("#question-display").classList.toggle("hide")

function renderAnswer() {
  document.querySelector("#answer-display").innerHTML = `
    <div class="question-display-container">
      <p class="answer">Answer here</p>
      <div class="reminder">
        <p>How difficult did you find this question?</p>
        <div class="reminder-btn">
          <button class="easy-btn" onClick="render('easy')">Easy</button>
          <button class="medium-btn" onClick="render('medium')">Medium</button>
          <button class="hard-btn" onClick="render('hard')">Hard</button>
        </div>
      </div>
    </div>
  `
}
renderAnswer()
answerDisplay.classList.toggle("hide")

function render(component) {

  if (component === "answer") {
    questionDisplay.classList.toggle("hide")
    answerDisplay.classList.toggle("hide")
  } else if (component === "easy" || "medium" || "hard") {
    questionDisplay.classList.toggle("hide")
    answerDisplay.classList.toggle("hide")
    const time = component
    // timeFunction(time) => call on timelord's time function
  }
}