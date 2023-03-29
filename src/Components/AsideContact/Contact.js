import React from "react";
import ContactForm from "./ContactFormContainer";
import '../../CSS/layout/forms.scss'
import {ErrorBoundary} from 'react-error-boundary'

function ContactErrorFallbackComponent({error, resetErrorBoundary}) {
	return (
	  <div role="alert">
		<p>Something went wrong with the Contact page:</p>
		<pre>{error.message}</pre><br/>
		<p>Please try reloading this page. If the issue persists, please contact <a href="mailto: support@bravebrossom.test.com">Brave Brossom Support Team</a>.</p>
	  </div>
	)
  }

const Contact = (props) => {
    return (
		<aside id="Contact">
            <div className="Wrapper">
                <ErrorBoundary 
					FallbackComponent={ContactErrorFallbackComponent}
					onError={(error, errorInfo) => console.error({ error, errorInfo })}>
                    <header>
                        <h1>Contact us</h1>
                    </header>
                    <section id="ContactAddress">
                        <div className="ContactDetails">
                            <h3>Please use the form below to contact us!</h3>
                            <h4>We would love to hear from you :)</h4>
                            <address><b>Address: </b>xxx xxxx xxxxx Tokyo, Japan</address>
                            <email><b>Email: </b><a href="mailto:fake.email@braveblossom.com">fake.email@braveblossom.com</a></email><br/>
                            <b>Phone: </b><a href="tel:123-456-789" className="phone">123-456-789</a>
                        </div>
                        <div className="ContactPoint"></div>
                        <i className="Credit">Photo by <a href="https://unsplash.com/@christinnoelle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christin Noelle</a> on <a href="https://unsplash.com/photos/f4cqfNQOBkA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></i>
                    </section>
                    <ContactForm />
                </ErrorBoundary>
            </div> 
        </aside>
    );
};

export default Contact;