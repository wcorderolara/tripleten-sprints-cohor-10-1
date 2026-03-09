console.log('Hi, from the Console Log Object!');
console.log('This is a simple JavaScript code snippet.');

// This is a single-line comment in JS
document.write("Hello World");
document.write("<h1>This is a main head<h1");

/*
================================================
feature: Change Title Content
================================================
Description: This function changes the content of the 
main title on the webpage when a button is clicked.
=================================================
@parameter name - The name of the title to change
@parameter newContent - The new content to set for the title.
=================================================
@outcome - The main title's content will be updated 
to the new content.
*/
function changeTitleContent() {
    document.getElementById("mainTitle").textContent = "Title has been changed!";
}