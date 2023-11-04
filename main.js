let form = document.getElementById('form'); 
let input = document.getElementById('input'); 
let msg = document.getElementById('msg'); 
let posts = document.getElementById('posts'); 


form.addEventListener('submit', (e)=> {
    e.preventDefault(); 
    console.log("button clicked"); 

    formValidation(); 
})

// formValidation function. This will help us prevent users from submitting blank input fields. 👇
let formValidation = () => {
    if(input.value === ''){
        msg.innerHTML = "Post cannot be empty"; 
        console.log('failure'); 
    }
    else{
        console.log("Success"); 
        msg.innerHTML = ""; 
    }
}