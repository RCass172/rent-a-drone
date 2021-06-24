# Testing

- [Code Validation](#code-validation)

## **Code Validation**

- I used [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input) to test the index.html page which returned no errors as shown below:

![HTML validation results](assets/images/markupValidator.png)

- I used [Jigsaw CSS Validation Service](https://jigsaw.w3.org/css-validator/validator) to test the style.css code which returned no errors as shown below:

![CSS validation results](assets/images/cssValidator.png)

- I used [JsHint](https://jshint.com/) to test the email.js, map.js and script.js code which returned the following:

![JsHint email.js results](assets/images/JsHintEmailJs.png)

  - Two undefined variables (emailjs and $) - These were not changed as $ relates to the JQuery used and the emailjs is taken from the EmailJs documentation and will not work without this variable as used.
  - One unused variable (sendEmail) - This is a function being called from the index.html which therefore throws up an error here.

![JsHint map.js results](assets/images/JsHintMap.png)

  - One undefined variable (google) - This was not changed as the code was taken from the Google Maps API documentation and will not work without the variable as used.
  - Two unused variables (marker and initMap) - This was not changed as the code was taken from the Google Maps API documentation and will not work without the variables as used.

![JsHint script.js results](assets/images/JsHintScriptFile.png)

  - One undefined variable ($) - This was not changed as it relates to the JQuery used.
  - Three unused Variables (dailyQuote, plusSlides, buttonClick) - These are functions being called from the index.html which therefore throws up an error here.



