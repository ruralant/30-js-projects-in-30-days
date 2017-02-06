window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// it wont wait untill we finisch to speack before return the sentences. It will write while we speech
recognition.interimResults =  true;

// create a paragraph when we pause to speech
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

// find the results in the arrays created and join them
recognition.addEventListener('result', e => {
  console.log(e.results);
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

    const poopScript = transcript.replace(/poop|poo|shit/gi, '💩');
    p.textContent = poopScript;
    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
  console.log(transcript);
});

recognition.addEventListener('end', recognition.start);

recognition.start();