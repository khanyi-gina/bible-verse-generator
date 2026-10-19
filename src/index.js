function generateVerse(event) {
  new Typewriter("#verse", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateVerse(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "o58t5b2726893c0f20b6fa50b54c4e9f";
  let context =
    "You are a Bible Verse expert and love to write verses. You mission is to generate a NLT version Book, verse, or any topic related to the Bible in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a Bible book, verse or any topic related to the Bible - ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let verseElement = document.querySelector("#verse");
  verseElement.classList.remove("hidden");
  verseElement.innerHTML = `<div class="generating">⏳ Generating a Bible book, verse, or any topic related to the Bible ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayVerse);
}


let verseFormElement = document.querySelector("#verse-generator-form");
verseFormElement.addEventListener("submit", generateVerse);
