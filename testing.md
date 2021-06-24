# Testing

- [Code Validation](#code-validation)
- [Testing Functionality](#testing-functionality)

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

## **Testing Functionality**

Testing was done on all the features of the website to make sure everything worked as expected as detailed below

1. Navigation bar

  - The logo was checked to make sure it takes user back to top of page when clicked
  - Each navigation link was checked to make sure it brings user to relevant section on page when clicked
  - Each link was checked to see if text color changes once the user hovers over it

2. Hero Image

  - The image was checked to make sure it covers full view height
  - Confirmed the intro text slides as expected 
  - Both call to action buttons checked to make sure they bring user to relevant section on page once clicked
  - Each button was checked to see if text color changes once the user hovers over it

3. About me section

  - The profile image was checked to make sure it was on view and looked good quality
  - The about me button was clicked to make sure it reveals information about owner as expected
  - Confirmed the click me button revealed the random quote as expected
  - The buttons were checked to see if text color changes once the user hovers over it

4. Image section

  - The images were checked to make sure on view at right size and good quality
  - Confirmed the right and left arrows both worked as expected on sliding through images

5. Testimonial section

  - The individual images were check to make sure they were correct size and good quality
  - Confirmed the right and left arrows both worked as expected on sliding through the testimonials

6. Video section
 
  - The video was checked it was displayed correctly
  - Confirmed on clicking video it opens in new browser tab

7. Packages section
  
  - Checked that both packages are displayed as expected
  - Confirmed on clicking first more button it adds relevant content as expected and button disappears
  - Confirmed on clicking second more button it adds relevant content as expected and button disappears

8. Contact section

  - Checked the contact form with relevant fields are present
  - Confirmed the name input is required from the user before submitting
  - Confirmed the email input is required from the user before submitting
  - Confirmed the contact number input is required from the user before submitting
  - Checked one radio button is required to be clicked before submitting
  - Confirmed the enter details input is required from the user before submitting
  - Confirmed on submitting button an acknowledgment message is displayed
  - Confirmed the email has been sent to owner email as expected with details provided by user as below

![Email confirmation](assets/images/emailConfirmation.png)

9. Footer

  - Checked the business name, address, email and contact number all present
  - Confirmed social media links open new tab once clicked to relevant website
  - The icons were checked to see if color changes once the user hovers over it
  - Confirmed Google map displays on all relevant website paths
  - Confirmed marker is displaying business address and map is interactive