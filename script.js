const textareaValue = document.querySelector("#textarea");
const copyBtn = document.querySelector(".btn");
const charCount = document.querySelector("#char-count");
const charRemaining = document.querySelector("#char-remain");

let charUse = 0;
let charRemains = 250;


textareaValue.addEventListener("input",()=>{
    charUse = textareaValue.value.length;
    charCount.innerHTML = charUse;
    charRemaining.innerHTML = charRemains - charUse;
})

// copy the text logic
copyBtn.addEventListener("click",()=>{
    // console.log("copied")
    textareaValue.select();
    textareaValue.setSelectionRange(0,1000); // for mobile users
    navigator.clipboard.writeText(textareaValue.value);
    setTimeout(() => {
        alert("copied to clipboard")
    },100);
})
