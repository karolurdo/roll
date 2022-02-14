const button = document.querySelector('button');
const names = ["David", "John", "Mark", "Steven", "Carl", "Noob", "Karen", "Troy"]; // creat name list
const nameGenerator = () => {
    
    console.log(Math.floor(Math.random()  *8)); // Roll 
    
}

button.addEventListener("click", nameGenerator)