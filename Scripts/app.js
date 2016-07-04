/**
 * FileName: app.js
 * 
 * @author Tom Tsiliopoulos
 * @date June 6, 2016
 * 
 * StudentID: 300818557
 * website: comp125-s2016-lesson5.azurewebsites.net
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";


    var firstNme;
    var lastName;
    var email;
    var contactNumber;
    var yourMSG;


    /**
     * This function uses the document.title to switch javascript function 
     * when the page switches
     * 
     * @function PageSwitcher
     * @returns {void}
     */
    function PageSwitcher() {
        switch (document.title) {
            case "Home":
                Home();
                break;
            case "About Me":
                About();
                break;
            case "Contact Me":
                Contact();
                break;
            case "Projects":
                Projects();
                break;
        }
    }

    /**
     * This function injects some text into the first paragraph of a page based on it's 
     * document.title property
     * 
     * @function InitialText
     * @returns {void}
     */
    function InitialText() {
        var paragraph = document.getElementsByTagName("p")[0];

        paragraph.textContent = "This is my first paragraph on the " + document.title + " page";
    }

    /**
     * This function provides JavaScript code for the Home page
     * 
     * @function Home
     * @returns {void}
     */
    function Home() {
        InitialText();

        var parentElement = document.querySelector("div.row");

        var firstParagraph = document.querySelector("div.row p");

        var secondParagraph = document.createElement("p");
        secondParagraph.textContent = "second paragraph";

        parentElement.insertBefore(secondParagraph, firstParagraph);


    }

    /**
    * This function provides JavaScript code for the About page
    * 
    * @function About
    * @returns {void}
    */
    function About() {
        InitialText();


            console.log("InnerWidth: " + window.innerWidth);
            console.log("InnerHeight: " + window.innerHeight);
            console.log("OuterWidth: " + window.outerWidth);
            console.log("OuterHeight: " + window.outerHeight);
            console.log("Location: " + window.location);
            console.log("Navigator appName: " + window.navigator.appName);
            console.log("Navigator appCodeName: " + window.navigator.appCodeName);
            console.log("Navigator appVersion: " + window.navigator.appVersion);

            window.navigator.geolocation.getCurrentPosition(function (location) {
                console.log("Latitude: " + location.coords.latitude);
                console.log("Longitude: " + location.coords.longitude);
            });

            var rowDiv = document.getElementsByClassName("row")[0];

            var timer = 0;
            var ycoord = 0;
            

            var myTimer = window.setInterval(function(){
                timer++;
                ycoord+= 100;
                console.log(timer);

                if(timer % 2 == 0) {
                    rowDiv.style.display = "none";
                } else {
                    rowDiv.style.display = "block";
                }

                if(timer > 10) {
                    console.log("we should stop now");
                    window.clearTimeout(myTimer);
                }

                window.scrollTo(0,ycoord);
            },200);

            


        }


    /**
    * This function provides JavaScript code for the Contact page
    * 
    * @function Contact
    * @returns {void}
    */
    function Contact() {

        //create a reference for form
        var contactForm = document.getElementById("contactForm");
       // var contactForm=document.forms[0];
       //var inputArrey = document.getElementById('input');
       //firstNme=inputArrey[0];

        firstNme = document.getElementById("firstName");
         lastName = document.getElementById("lastName");
         email = document.getElementById("email");
         contactNumber = document.getElementById("contactNumber");
         yourMSG = document.getElementById("message");

        contactForm.addEventListener("submit",onFormSubmit);




    }

    /**
    * This function provides JavaScript code for the Projects page
    * 
    * @function Projects
    * @returns {void}
    */
    function Projects() {
        InitialText();
    }

//CALLBACK (EVENT HANDLR) FUNCTIONs +++++++++++++++


 function onFormSubmit (event) {

    console.log("log");
    console.info("info");

//
    event.preventDefault();

    displayFormValue();

    contactForm.reset();
} 

    /**
    * This function display value of the form in contact page
    * 
    * @function displayFormValue
    * @returns {void}
    */
function displayFormValue() {

var column = document.getElementById("column");

var formValues = document.createElement("div");
formValues.setAttribute("id","formValues");

var formValueString = "";
formValueString += ("<p><hr><br>");
formValueString += ("First Name: " + firstName.value);
formValueString += ("<br>");
formValueString += ("Last Name: " + lastName.value);
formValueString += ("<br>");
formValueString += ("Email: " + email.value);
formValueString += ("<br>");
formValueString += ("Contact Number " + contactNumber.value);
formValueString += ("<br>");
formValueString += ("MSG: " + yourMSG.value);
formValueString += ("<br><hr></p>");

formValues.innerHTML=formValueString;

if(document.getElementById("formValues"))
{


}
else{
column.appendChild(formValues);
}


    console.log("++++++++++++++++++++++++++++++++++++++++");
    console.log("First Name: " + firstName.value);
    console.log("Last Name: " + lastName.value);
    console.log("Email: " + email.value);
    console.log("Contact Number " + contactNumber.value);
    console.log("MSG: " + yourMSG.value);
    console.log("++++++++++++++++++++++++++++++++++++++++");
}



    window.addEventListener("load", PageSwitcher);

})();