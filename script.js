document.addEventListener('DOMContentLoaded',() => {
    let form = document.getElementById('pfsform');
    let send = document.getElementById('send');
    let inputs = document.getElementsByTagName('input');

    form.addEventListener('submit', () => {
        console.log(form.elements);

        for (let input in inputs) {
            console.log(input.value);
        }
        /*Array.from(inputs).forEach((val, key) => {
            console.log(vals);
        });*/
        alert('lol');
    });
});
