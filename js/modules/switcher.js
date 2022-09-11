const switcher = () => {
    const btnSwitch = document.querySelector("#switch");
    btnSwitch.addEventListener("click",()=>{
        document.body.classList.toggle("body--dark");
        btnSwitch.classList.toggle("active");
    });
};

export default switcher;