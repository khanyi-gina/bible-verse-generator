function generateVerse(event) {
  event.preventDefault();

  new Typewriter("#verse", {
    strings: " 𝐆𝐨𝐬𝐩𝐞𝐥 𝐨𝐟 𝐉𝐨𝐡𝐧 (𝐉𝐨𝐡𝐧 1:1) 
         𝑰𝒏 𝒕𝒉𝒆 𝒃𝒆𝒈𝒊𝒏𝒏𝒊𝒏𝒈 𝒘𝒂𝒔 𝒕𝒉𝒆 𝑾𝒐𝒓𝒅, 𝒂𝒏𝒅 𝒕𝒉𝒆 𝑾𝒐𝒓𝒅 𝒘𝒂𝒔 𝒘𝒊𝒕𝒉 𝑮𝒐𝒅, 𝒂𝒏𝒅 𝒕𝒉𝒆 𝑾𝒐𝒓𝒅 𝒘𝒂𝒔 𝑮𝒐𝒅",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let verseFormElement = document.querySelector("#verse-generator-form");
verseFormElement.addEventListener("submit", generateVerse);
