
const btn = document.querySelector('.btn');

console.log(btn)

const handleClick = () => {
    document.body.clasList.toggle('bg-black');
    document.body.clasList.toggle('bg-white ');

    // console.log(changeClass)
} 


btn.addEventListener('click', function() {
    document.body.classList.toggle('bg-black');
    document.body.classList.toggle('bg-white');

    // const className = document.body.className;
    // if(className == "light-theme") {
    //     this.textContent = "Dark";
    // } else {
    //     this.textContent = "Light";
    // }

})


const letter = "h";
const string = "The quick brown fox jumps over the lazy dog";


console.log(string.split(letter).length); 


let number = 2;
let number2 = 5.2323;

let str = number2.toString();



console.log(str);
// console.log(toString(number));
console.log(typeof(number2));
console.log(Math.floor(number2,2));
