function CallField(formClass, inputClass) {
    const regexp = new RegExp(/^[а-я]+/ig);
    const inptForm = document.querySelectorAll(inputClass);
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
    const form = document.querySelector(formClass);
    form.addEventListener('submit', event => {
        inptForm.forEach(el => {
            if(el.classList.contains('error')) {
                event.preventDefault();
            }
            if (!form.querySelectorall('input').forEach(el => el.classList.contains('error'))) {
                form.classList.remove('visible');
            }
        });
    });
}



function request() {
    const inptName = document.querySelector('#item-sales');
    const inptNumber = document.querySelector('#item-price');
    const form = document.querySelector('.task');
    const btnItems = document.querySelector('.catalog').querySelectorAll('button');
    btnItems.forEach(el => {
        el.addEventListener('click', event => {
            form.classList.add('visible');
            console.log(inptName.value);
            inptName.value = event.target.parentElement.children[0].textContent;
            inptNumber.value = event.target.parentElement.children[1].textContent;
        });
    });
    document.querySelector('#light-cross').addEventListener('click', () => {
        form.classList.remove('visible');
    })
    form.addEventListener('submit', event => {
        let pop = form.querySelectorAll('.footer-calls-form-inpt').forEach(el => {
            if(el.classList.contains('error')) {
                event.preventDefault();
            } 
            if(el.value === '') {
                event.preventDefault();
                el.classList.add('error');
            }
        });
    });
    CallField('.task', '.footer-calls-form-inpt');
}

CallField('.footer-calls-form', '.footer-calls-form-inpt');
request();
