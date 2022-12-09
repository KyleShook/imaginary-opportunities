import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Looking for a new challenge? Want to work for the one and only Forrest
				Gump? We're looking for a frontend developer to join our team at Forrest
				Gump Enterprises.
			</p>
			<p>
				In this role, you'll be responsible for developing and maintaining the
				frontend of our online shrimp sales platform, where customers can buy
				their favorite shrimp dishes from Bubba Gump Shrimp Co. You'll also be
				working on our social media presence, keeping our followers up to date
				on all things shrimp.
			</p>
			<p>
				We're looking for someone with experience in HTML, CSS, and JavaScript,
				as well as a passion for shrimp. Bonus points if you can quote the
				entire movie Forrest Gump.
			</p>
			<p>
				So come on down, put on your best shrimp-loving smile, and join the team
				at Forrest Gump Enterprises. Life is like a box of chocolates, you never
				know what you're gonna get - but in this case, it'll definitely be
				shrimp.
			</p>
		</section>
	);
};

export default Listing;
