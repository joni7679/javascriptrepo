// JavaScript Practice Questions
// 1. Create an HTML page with a button. When the button is clicked, change the text of a
// paragraph element.


let text = document.getElementById('text');
let button = document.getElementById('btn');
button.addEventListener('click', function () {
    text.innerHTML = "Hello guys, I am a paragraph element";
});


// 2. Create a page with two images and a button. When the button is clicked, swap the source
// attribute of the images.
let image1 = document.getElementById('img1');
let image2 = document.getElementById('img2');
let button2 = document.getElementById('btn2');

button2.addEventListener("click", () => {
    let img1src = image1.src;
    let imag2src = image2.src;
    console.log(img1src);
    console.log(imag2src);
    image1.src = imag2src;
    image2.src = img1src;

});


// 3. Create a form with input fields and a submit button. Use JavaScript to validate the form
// and display an error message if the input is invalid.

let form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let nameError = document.getElementById('nameError');
    // let email = document.getElementById('email').value;
    // let password = document.getElementById('password').value;
    // let confirmPassword = document.getElementById('confirmPassword').value;

    if (name === "") {
        nameError.innerHTML = "Name is required"
    }
    else if (!isNaN(name)) {
        nameError.innerHTML = "Name must be alphabets only"
    }
    else if (name.length < 3) {
        nameError.innerHTML = "Name must be atleast 3 characters long"
    }
    else if (name.length > 20) {
        nameError.innerHTML = "Name must be less than 20 characters long"
    }

    else {
        nameError.innerHTML = ""
    }
});




// 4. Create an unordered list. Allow users to add and remove list items dynamically using
// buttons.
// 5. Build a countdown timer that starts when a button is clicked and updates the display in
// real-time.
// 6. Create a tabbed interface where clicking on tabs displays different content sections
// without page reload.
// 7. Display a progress bar that updates in real-time, showing the progress of a task,
// download, or form submission.
// 8. Create a search bar that displays live search results as users type, updating the results
// without requiring a full page reload.
// 9. Build a character counter for a text area or input field, which updates in real-time as the
// user types and enforces a character limit.
// 10. Show a progress bar that indicates how much of the page has been scrolled.