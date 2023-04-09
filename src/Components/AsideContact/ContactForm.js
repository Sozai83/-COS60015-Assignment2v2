import React, {useState, useEffect} from "react";

const ContactForm = (props) => {
  //Stores form input values
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState(''); 
  //Stores form input values for email
  const [email, setEmail] = useState('');
  const [emailValidation, setEmailValidation] = useState(true);

  //When email values change, it validates the email address
  useEffect(()=>{
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if(email.length > 0){
      setEmailValidation(regexEmail.test(email));
    }
  }, [email]);

    //Stores form input values for phone
  const [phone, setPhone] = useState('');
  const [phoneValidation, setPhoneValidation] = useState(true);

    //When phone values change, it validates the phone
  useEffect(()=>{
    const regexPhone = /^\d{10}$/;
    if (phone.length > 0){
      setPhoneValidation(regexPhone.test(phone));
    }else{
      setPhoneValidation(true);
    }
  }, [phone]);

  //Stores form input values
  const [category, setCategory] = useState('otherGeneralQueries');
  const [message, setMessage] = useState('');

//Set missing mandatory staus
  const [missingMandatory, setmissingMandatory] = useState('');

  //Callback function to check each mandatory field is filled
  const checkMandatory = (event) => {  
    let tempMissingMandatory = '';
    if(fname.length <= 0){
      tempMissingMandatory += ' First name,'
    }
    if(lname.length <= 0){
      tempMissingMandatory += ' Last name, '
    }
    if(email.length <= 0){
      tempMissingMandatory += ' Email address,'
    }
    if(category.length <= 0){
      tempMissingMandatory += ' Category,'
    }
    if(message.length <= 0){
      tempMissingMandatory += ' Description'
    }
    setmissingMandatory(()=>tempMissingMandatory);
  }

  //Function to only call props.handler when all the validation passes
  const submitHandler = (event) => {
    event.preventDefault();
    if(emailValidation && phoneValidation && missingMandatory <= 0){
      props.handler();
    } 
  }

  //Renders contact form and error messages if any of the validations fail
  return (
    <form id="ContactForm" onSubmit={submitHandler}>
      <div id="Alert" className="Alert" data-testid="alert">
        {(!emailValidation || !phoneValidation || missingMandatory.length > 0) &&
        <ul id="AlertList">
          {!emailValidation && (
            <li key="email">Please enter valid email adress.</li>
          )}
          {!phoneValidation && (
            <li key="phone">Please enter valid phone number.</li>
          )}
          {missingMandatory.length > 0 && (
            <li  key="mandatory">Please fill {missingMandatory}</li>
          )}
        </ul>
        }
      </div>
      <p className="MandatoryFieldNote">Field with * is mandatory.</p>
      <div className="HalfWrapper">
        <label htmlFor="fname">First Name*: </label>
        <input
          id="fname"
          name="fname"
          data-testid="fname"
          aria-label="fname"
          type="text"
          placeholder="First name"
          onChange={(event)=>setFname(event.target.value)}
        />
      </div>
      <div className="HalfWrapper">
      <label htmlFor="lname">Last Name*: </label>
        <input
          id="lname"
          name="lname"
          data-testid="lname"
          aria-label="lname"
          type="text"
          placeholder="Last name"
          onChange={ (event)=>setLname(event.target.value)}
        />
      </div>
      <div className="HalfWrapper">
        <label htmlFor="email">Email*: </label>
        <input
          id="email"
          name="email"
          data-testid="email"
          aria-label="contact-email"
          type="contact-email"
          placeholder="abc@braveblossom.com"
          onChange={ (event)=> setEmail(event.target.value)}
        />
      </div>
      <div className="HalfWrapper">
        <label htmlFor="phone">Phone: </label>
        <input id="phone"
        name="phone"
        data-testid="phone"
        aria-label="phone"
        type="phone"
        placeholder="0123456789"
        onChange={ (event)=> setPhone(event.target.value)}
        />
      </div>
      <div className="FullWrapper">
        <label htmlFor="category" className="left">
          Category*:
        </label>
        <select
          name="category"
          defaultValue="otherGeneralQueries"
          onChange={(event)=> setCategory(event.target.value)}
        >
          <option
            type="checkbox"
            value="supportTeam"
            aria-label="checkbox_team">
            Support Team
          </option>
          <option
            type="checkbox"
            value="aboutGame"
            aria-label="checkbox_game">
            About Game
          </option>
          <option
            type="checkbox"
            value="feedback"
            aria-label="checkbox_team">
            Feedback
          </option>
          <option
            type="checkbox"
            value="otherGeneralQueries"
            aria-label="checkbox_team"
          >
            Other General Queries
          </option>
        </select>
      </div>
      <div className="FullWrapper">
        <label htmlFor="query" className="left">
          Description*:
        </label>
        <textarea
          id="query"
          name="query"
          data-testid="query"
          aria-label="query"
          type="text"
          onChange={ (event)=> setMessage(event.target.value)}
        ></textarea>
      </div> 
      <div className="FileWrapper">
        <label htmlFor="file" className="left">
          Select a file:
        </label>
        <input type="file" id="file" name="file" />
      </div>
      <div className="SubmitWrapper">
        <input
          type="submit"
          id="contact-submit"
          value="Send Message"
          aria-label="submit"
          onClick={checkMandatory}
        />
      </div>
    </form>
  );
};

export default ContactForm;
