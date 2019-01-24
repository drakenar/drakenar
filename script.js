document.addEventListener('DOMContentLoaded',() => {
    let form = document.getElementById('pfsform');
    let send = document.getElementById('send');
    let inputs = document.getElementsByTagName('input');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        return false;
    });

    send.addEventListener('click', () => {
        console.log(form.elements);

        let pfsForm = {};
        for (let field of form.elements) {
            if (field.type == 'text' || field.type == 'number' || field.type == 'number' || field.type == 'email' ||
                field.type == 'textarea') {
                pfsForm[field.name] = field.value;
            } else if (field.type == 'radio') {
                let radios = form.elements['viaje'];
                console.log(radios);
                for (let radio of radios) {
                    if (radio.checked)
                        pfsForm[radio.name] = radio.value;
                }
            }
        }

        let json = JSON.stringify(pfsForm);
        window.open("http://63828450.ngrok.io/pfsservice/?pfsform="+json, "_self");

        /*let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", () => {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        //xhr.open("GET", "https://cardseed.com/api/countries");
        xhr.open("GET", "http://ad4dd612.ngrok.io/pfsservice?test=abc");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("cache-control", "no-cache");
        /*xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:80');
        xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

        xhr.send();*/
        /*Array.from(form.elements).forEach((a, b) => {
            console.log(b.value);
        });
        for (let input in inputs) {
            console.log(input);
        }*/
    });

});
