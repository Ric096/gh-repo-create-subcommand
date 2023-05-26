
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