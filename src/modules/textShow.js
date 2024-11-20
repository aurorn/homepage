function toggleVis() {
    const btns = document.querySelectorAll(".btn");
    const textBox = document.querySelector(".txt-box");

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
                
                textBox.classList.remove("hidden");
        });
    });
}

function showText() {
    const aboutBtn = document.querySelector(".about-btn");
    const techBtn = document.querySelector(".tech-btn");
    const gitBtn = document.querySelector(".git-btn");

    const aboutBox = document.querySelector(".about-txt");
    const techBox = document.querySelector(".tech-txt");
    const gitBox = document.querySelector(".git-txt");

    const aboutTxt = "Quis nulla repudiandae ea expedita autem sit. Sit et ad quasi eum est. Exercitationem quo accusamus eos nihil sed odio. Quia impedit quo tempora doloribus nam ea. Optio a accusantium aut dolorem doloremque. Optio rerum incidunt architecto occaecati ab rerum quia.";
    const techTxt = "This is the technology used in my applications";
    const gitTxt = "This is my Github page";

    const clearAllBoxes = () => {
        aboutBox.textContent = "";
        techBox.textContent = "";
        gitBox.textContent = "";
    };

    aboutBtn.addEventListener("click", () => {
        clearAllBoxes();
        aboutBox.textContent = aboutTxt;
    });

    techBtn.addEventListener("click", () => {
        clearAllBoxes();
        techBox.textContent = techTxt;
    });

    gitBtn.addEventListener("click", () => {
        clearAllBoxes();
        gitBox.textContent = gitTxt;
    });
}

export { toggleVis, showText };
