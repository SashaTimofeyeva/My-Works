const btn = document.querySelector('.form-button');
const contact_form = document.querySelector('.contact-form');

function sendData(data) {

    console.log('Sending data');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/log');

    xhr.onload = function() {
        alert(`Загружено: ${xhr.status} ${xhr.response}`);
      };
      
      xhr.onerror = function() {
        alert(`Ошибка соединения`);
      };

    let urlEncodedData = "",
        urlEncodedDataPairs = [],
        name;

    for(name in data) {
        urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }

    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.send(urlEncodedData);

    xhr.onreadystatechange = function() {
        if(xhr.readyState === xhr.DONE && xhr.status === 200) {
            let type = xhr.getResponseHeader("Content-Type");
            if (type.match(/^text/))
            console.log(xhr.responseText);
        }
    };
}

btn.addEventListener('click', sendData, false);