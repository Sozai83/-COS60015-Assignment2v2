import React, {useState} from "react";
import Subscription from "./Subscription"
import FooterBody from "./FooterBody/FooterBody"
import '../../CSS/layout/footer.scss'

const Footer = ({selectMainComponent}) => {
	const [subscriptionFormStatus, setSubscriptionFormStatus] = useState(false);
	const onSubmit = () => setSubscriptionFormStatus(true);
	const reappearingFrom = ()=> setSubscriptionFormStatus(false);
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
