const faqQues = document.querySelectorAll(".faq-ques");



faqQues.forEach((el) => {
    el.addEventListener("click", (event) => {


        // console.log(event.target);


        faqQues.forEach(element => {
            if (element != el) {
                element.nextElementSibling.classList.remove("faq-active");
                // el.children[0].classList.toggle("rotate-180");

                if (element.children[0].classList.contains("rotate-180")) {
                    element.children[0].classList.remove("rotate-180")
                }


                console.log(element.children[0].classList.contains("rotate-180"));
            }
        })


        if (event.target.tagName === 'IMG') {
            event.target.classList.toggle("rotate-180");
            event.target.parentElement.nextElementSibling.classList.toggle("faq-active")
        } else {
            event.target.children[0].classList.toggle("rotate-180");
            event.target.nextElementSibling.classList.toggle("faq-active")
        }




    })
})