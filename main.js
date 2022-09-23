const messageElem = document.querySelector(`.message`);
const changeTextButtonElem = document.querySelector(`.changeTextButton`);

messageElem.innerHTML = "this is from <b>javascript</b>";
changeTextButtonElem.addEventListener("click", () => {
    messageElem.innerText = "TEXT WAS CHANGED";
});
const questionElem = document.querySelector(`.question`);
const answerElem = document.querySelector(`.answer`);
const showAnswerButtonElem = document.querySelector(`.showAnswerButton`);
showAnswerButtonElem.addEventListener("click", () => {
    answerElem.classList.toggle("hidden");
});