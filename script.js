const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

//change text and gif when the yes butoon is clicked

yesBtn.addEventListener("click", () =>  {
question.innerHTML = " Yes I do, I really do";
gif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGk4anpwdjVndmhldWlkNjJoenhnamk3Nm5tNTc1amQ5bWRocGpmaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TRgyI2f0hRHBS/giphy.gif";
});

//make the nobtn move randomly on hover
noBtn.addEventListener("mouseover", ()=>
{
const wrapper = document.querySelector(".wrapper");
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
//calculate max postions to ensure the button stays within the wrapper

const maxX = wrapperRect.width - noBtnRect.width;
const maxY = wrapperRect.height -noBtnRect.height;

const randomX = Math.floor(Math.random() *  maxX);
const randomY = Math.floor(Math.random() * maxY);

noBtn.style.left = randomX + "px";
noBtn.style.top = randomY + "px";

});