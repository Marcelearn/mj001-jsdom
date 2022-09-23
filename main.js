const messageElem = document.querySelector(`.message`);
const changeTextButtonElem = document.querySelector(`.changeTextButton`);

messageElem.innerHTML = "this is from <b>javascript</b>";
changeTextButtonElem.addEventListener("click", () => {
    messageElem.innerText = "TEXT WAS CHANGED";
});
const questionElem = document.querySelector(`.question`);
const answerElem = document.querySelector(`.answer`);
changeTextButtonElem = document.querySelector(`.showAnswerButton`);
showAnswerButton.addEventListener("click", () => {
    answerElem.classList.toggle("hidden");
});