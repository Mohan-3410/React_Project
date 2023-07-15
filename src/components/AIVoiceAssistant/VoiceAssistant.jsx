

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
    const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    <p>{text}</p>

    if(e.results[0].isFinal){
        if(text.includes('hello')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Hi';
            texts.appendChild(p);
        }
        if(text.includes('what is your name')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'I am a Voice Assistant Bot';
            texts.appendChild(p);
        }
        if(text.includes('YouTube')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening your channel';
            texts.appendChild(p);
            window.open('https://www.youtube.com/')
        }
        if(text.includes('open Google')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening Google';
            texts.appendChild(p);
            window.open('https://www.google.com/')
        }
        if(text.includes('Google')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening Google';
            texts.appendChild(p);
            window.open('https://www.google.com/')
        }
        if(text.includes('show weather detail')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening Weather Deatail';
            texts.appendChild(p);
            window.open('https://weather.com/en-IN/weather/today/l/18.52,73.86?par=google')
        }
        p = document.createElement('p');
    }    
    console.log(text)
})
recognition.addEventListener('end', ()=> {
    recognition.start();
})
recognition.start();
