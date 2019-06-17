function getDate(){
    let today = new Date();
    document.getElementById('date').innerHTML = today.toDateString();
    }

const givemeJoke = () => {

let jokes = [ "When I see lovers' names carved in a tree, I don't think it's sweet. I just think it's surprising how many people bring a knife on a date.",
"A man got hit hard in the head with a can of 7Up. He’s alright though, it was a soft drink.",
"Sometimes some people deserve a good high five, in the face, with a chair.",
 "Farting in a lift is wrong on so many levels!" ];

let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
let displayJoke = document.getElementById('display-joke');
displayJoke.innerHTML = randomJoke
}

// 
// const getDate = () => {
    
//     // let thisday = new Date();
//  
    //     let dd = String(today.getDate()).padStart(2, '0');
//     let mm = String(today.getMonth() + 1).padStart(2, '0'); 
//     let yyyy = today.getFullYear();

// thisday = `Today's is the ${dd}/${mm}/${yyyy}`
// let displayDate = document.getElementById('display-date');
// displayDate.innerHTML = thisday
// }