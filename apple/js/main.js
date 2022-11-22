function CallField() {
    const regexp = new RegExp(/^[а-я]+/ig);
    const inptForm = document.querySelectorAll('.footer-calls-form-inpt');
    inptForm.forEach(el => {
        el.addEventListener('input', event => {
            let inpt = event.target;
            if (inpt.value.match(regexp) === null) {
            inpt.classList.add('error');
            } else {
            inpt.classList.remove('error');
            }
        });
    });
    document.querySelector('.footer-calls-form').addEventListener('submit', event => {
        inptForm.forEach(el => {
            if(el.classList.contains('error')) {
                event.preventDefault();
            }
        })
    });
}

CallField();

function request() {
    const inptName = document.querySelector('#name-inpt');
    const inptNumber = document.querySelector('#num-inpt');
    const form = document.querySelector('.task');
    const items = document.querySelectorAll('.catalog-item');
    const btnItems = document.querySelector('.catalog').querySelectorAll('button');
    btnItems.forEach(el => {
        el.addEventListener('click', event => {
            form.classList.add('visible');
            inptName.value = event.target.parentElement.children[0].textContent;
            inptNumber.value = event.target.parentElement.children[1].textContent;
        });
    });
    
}

request();
