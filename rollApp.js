const button = document.querySelector('button');
const names = ["David", "John", "Mark", "Steven", "Carl", "Noob", "Karen", "Troy"]; // creat name list
const nameGenerator = () => {
    
    const indexRoll = (Math.floor(Math.random() *8)); // Roll 
    document.querySelector("div").textContent =names[indexRoll]; //add textContect do div
}

button.addEventListener("click", nameGenerator)