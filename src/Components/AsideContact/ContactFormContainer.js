import React, {useState, useEffect} from "react";
import ContactForm from './ContactForm'

const ContactFormContainer = () => {
  //Callback function to take users to the home page after 5 seconds
  const sendToHomepage = () => {
    setTimeout(() => {
      document.location.href = "/";
    }, 5000);
  };
  //Saves status of whether the form was submitted or not
  const [submitStatus, setSubmitStatus] = useState(false);
  //Callback function to set the submitted status to true
  const formSubmit = () => setSubmitStatus(true);
  //When the submitted form status changes it takes user to the home page
  useEffect(() => {
    if (submitStatus) {
        sendToHomepage(); // call your sendToHomepage function
        return clearTimeout(sendToHomepage);
    }
  }, [submitStatus]);
  const form = <ContactForm handler={formSubmit}/>;
//Returns contact form is the submit status is false, otherwise, shows thank you message
  return (
    <div>
      {submitStatus === false && form}
      {submitStatus && (
        <p>
          Thank you for submitting the form!
          <br />
          We will be in touch soon.
          <br />
          You will be automatically redirected to the home page in 5 seconds.
        </p>
      )}
    </div>
  );
};

export default ContactFormContainer;
