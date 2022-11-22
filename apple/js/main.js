function CallField() {
    const inptName = document.querySelector('#inpt-name');
    const inptNumber = document.querySelector('#inpt-num');
    const regexp = new RegExp(/^[а-я]+/ig);
    document.querySelector('.footer-calls-form').addEventListener('submit', event => {
        if (inptName.value.match(regexp) === null) {
            inptName.style.border = '2px solid red';
            event.preventDefault();
        } 
        if (inptNumber.value.match(regexp) === null) {
            inptName.style.border = '2px solid red';
            event.preventDefault();
        } else {
            return;
        }
    });
}

CallField();