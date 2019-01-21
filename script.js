document.addEventListener('DOMContentLoaded',() => {
    let form = document.getElementById('pfsform');
    let send = document.getElementById('send');
    let inputs = document.getElementsByTagName('input');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        return false;
        console.log(form.elements);

        for (let input in inputs) {
            console.log(input.value);
        }
        /*Array.from(inputs).forEach((val, key) => {
            console.log(vals);
        });*/
        /*xhttp.open("POST", "http://bdb9146b.ngrok.io/pfsservice", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.setRequestHeader( 'referrer', 'cardseed');
        xhttp.onreadystatechange = () => {
            if (this.readyState == 4 && this.status == 200)
                console.log(this.responseText);
        }

        xhttp.send("pfsform=abc");*/

        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", () => {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("GET", "https://cardseed.com/api/countries");
        //xhr.open("GET", "http://b1dd9be5.ngrok.io/pfsservice?test=abc");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

        xhr.send();
    });

    send.addEventListener('click', () => {
        console.log(form.elements);

        let xhr = new XMLHttpRequest();
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
        xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');*/
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

        xhr.send();
        /*Array.from(form.elements).forEach((a, b) => {
            console.log(b.value);
        });
        for (let input in inputs) {
            console.log(input);
        }*/
    });

});
