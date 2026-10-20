function displayVerse(response) {
  new Typewriter("#verse", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generateVerse(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "o58t5b2726893c0f20b6fa50b54c4e9f";
  let context =
    "You are a Bible Verse expert and love to write verses. Your mission is to generate a NLT (New Living Translation) Bible verse, or any topic related to the user's topic. Provide the Book and Chapter/Verse reference. Separate each line with a <br />. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a Bible book, verse or any topic related to ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let verseElement = document.querySelector("#verse");
  verseElement.classList.remove("hidden");
  verseElement.innerHTML = `<div class="generating">⏳ Generating a Bible book, verse, or any topic related to ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayVerse);
}


let verseFormElement = document.querySelector("#verse-generator-form");
verseFormElement.addEventListener("submit", generateVerse);
