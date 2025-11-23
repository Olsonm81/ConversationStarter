let prompts = [];

fetch("prompts.json")
    .then(res => res.json())
    .then(data => prompts = data);

document.getElementById("newBtn").addEventListener("click", () => {
    if (prompts.length === 0) return;
    const randomIndex = Math.floor(Math.random() * prompts.length);
    document.getElementById("promptBox").innerText = prompts[randomIndex];
});
