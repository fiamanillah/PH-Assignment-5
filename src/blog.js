const faqQues = document.querySelectorAll(".faq-ques");



faqQues.forEach((el)=>{
    el.addEventListener("click", (event)=>{
        
        
        // console.log(event.target);

        
        faqQues.forEach(element => {   
            if (element != el) {
                element.nextElementSibling.classList.remove("faq-active");
                console.log(element);
            }
        })
        

        if (event.target.tagName === 'IMG') {
            event.target.classList.toggle("rotate-180");
            event.target.parentElement.nextElementSibling.classList.toggle("faq-active")
        }else{
            event.target.children[0].classList.toggle("rotate-180");
            event.target.nextElementSibling.classList.toggle("faq-active")
        }

        
        
        
    })
})