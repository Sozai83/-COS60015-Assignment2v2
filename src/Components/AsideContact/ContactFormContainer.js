import React, {useState, useEffect} from "react";
import ContactForm from './ContactForm'

const ContactFormContainer = () => {
  const sendToHomepage = () => {
    setTimeout(() => {
      document.location.href = "/";
    }, 5000);
  };
  const [submitStatus, setSubmitStatus] = useState(false);
  const formSubmit = () => setSubmitStatus(true);
  useEffect(() => {
    if (submitStatus) {
        sendToHomepage(); // call your sendToHomepage function
        return clearTimeout(sendToHomepage);
    }
  }, [submitStatus]);
  const form = <ContactForm handler={formSubmit}/>;

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
