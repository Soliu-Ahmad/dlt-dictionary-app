const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result")
const sound = document.getElementById("sound")
const btn = document.getElementById("search-btn")


const speech = new SpeechSynthesisUtterance(); // variable we declear for audio
btn.addEventListener("click", () => {
    // just to comfirm mybe the input is working or not thats why we console inputword
    let inputWord = document.getElementById("input-word").value
        // console.log(inputWord)

        fetch(`${url}${inputWord}`)
            .then((response) => response.json())
            // this is to check may be the input is working as data
            .then((data) => {
                console.log(data)
                result.innerHTML = `
                <div class="word">
                <h3>${inputWord}</h3>
                <button">
                    <i class="fas fa-volume-up"></i>
                </button>
            </div>

            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>
            <p class="word-meaing">
               ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
               ${data[0].meanings[0].definitions[0].example || ""}
            </p>
                `
                // sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`)
                //     // console.log(sound)

                    // function that make audio to be working
                let audio = document.querySelector('.fa-volume-up')
                console.log(inputWord);
                audio.addEventListener('click', () => {
                speech.text = inputWord
                speechSynthesis.speak(speech)
                    })
             })
             .catch(() => {
                result.innerHTML = `<h2 class="error">Couldn't Find The word</h2>`
             })
})

// const playSound = () => {
//     sound.play()
// }