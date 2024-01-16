let data = fetch('world-data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

let list = document.getElementById("myList");
    for (i = 0; i < data.length; ++i) {
        let li = document.createElement('li');
        li.innerText = data[i];
        list.appendChild(li);
    }