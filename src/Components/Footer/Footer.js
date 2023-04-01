import React, {useState} from "react";
import Subscription from "./Subscription"
import FooterBody from "./FooterBody/FooterBody"
import '../../CSS/layout/footer.scss'

const Footer = ({selectMainComponent}) => {
	//Saves sunscriptionFormStatus with boolean value. If false, it is not submitted. If ture, it is submitted
	const [subscriptionFormStatus, setSubscriptionFormStatus] = useState(false);
	//Callback function to change subscription form staus
	const onSubmit = () => setSubscriptionFormStatus(true);
	//Call back function to show the subscription form again
	const reappearingFrom = ()=> setSubscriptionFormStatus(false);
	
	//Renders subcription form and footer area
	//Shows subscription form or thank you message depending on the subscrioption form status
    return (
		<footer>
			{subscriptionFormStatus === false && <Subscription onSubmit={onSubmit}/>}
			{subscriptionFormStatus && (
				<div className="Wrapper">
					<section id="Subscription">
						<p>Thank you for subscribing Brave Blossoms!<br/>
						<button onClick={reappearingFrom}>Subscribe more</button></p>
					</section>
				</div>
			)}
			<FooterBody selectMainComponent={selectMainComponent}/>
		</footer>
    );
};

export default Footer;
