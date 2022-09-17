const counter = () => {
    const contadores = document.querySelectorAll('.counter');
    const speed = 100000;

    const showAnimation = () => {
        const scrollY = document.documentElement.scrollY;
        for(const contador of contadores){
            let heightElement = contador.getBoundingClientRect().top;
            let sizeWindow = window.innerHeight * 0.7;
            if(heightElement < sizeWindow){
                const animateCounter = () => {
                    let maxNumber = +contador.dataset.maxNumber;
                    let currentNumber = +contador.innerText;
                    let increase = maxNumber/speed;
            
                    if(currentNumber < maxNumber){
                        contador.innerText = Math.ceil((currentNumber) + increase);
                        setTimeout(animateCounter, 300);
                    }else{
                        contador.innerText = maxNumber;
                    }
                }
                animateCounter();
            }
        }
    };
    
    document.addEventListener('scroll', () => {
        showAnimation();
    //   header.classList.toggle('header--scroll', scrollY > 0);
    });

};

export default counter;