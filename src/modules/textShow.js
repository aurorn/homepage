function toggleVis() {
    const btn = document.querySelectorAll(".btn");
    const textBox = document.querySelector(".txt-box");
    btn.forEach((btn) => {
        btn.addEventListener("click", () => {
            textBox.style.display = "block";
        });
    });
}

function showText(){
    const aboutBtn = document.querySelector(".about-btn");
    const aboutBox = document.querySelector(".about-txt");
    const aboutTxt = document.createElement("p");
    aboutTxt.textContent = 'Quis nulla repudiandae ea expedita autem sit. Sit et ad quasi eum est. Exercitationem quo accusamus eos nihil sed odio. Quia impedit quo tempora doloribus nam ea. Optio a accusantium aut dolorem doloremque. Optio rerum incidunt architecto occaecati ab rerum quia.';

    aboutBtn.addEventListener('click', () => aboutBox.appendChild(aboutTxt));  


}

export {toggleVis, showText};