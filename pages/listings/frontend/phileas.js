import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a frontend developer with a sense of adventure and a love for
				the open road? Do you have the skills and determination to
				circumnavigate the globe in just 80 days? If so, Phileas Fogg is looking
				for you!
			</p>
			<p>
				As a member of our team, you'll be responsible for creating and
				maintaining a seamless and dynamic user experience on our website.
				You'll work closely with our designers and back-end developers to create
				cutting-edge interfaces that will transport our users to exotic
				locations around the world.
			</p>
			<p>
				You'll need a strong understanding of HTML, CSS, and JavaScript, as well
				as a willingness to learn and adapt to new technologies. A passion for
				travel and adventure is a must, as you'll be joining Phileas Fogg on his
				epic journey around the globe.
			</p>
			<p>
				So if you're ready for the challenge, apply now and join us on our
				journey to make the impossible possible. And don't worry, we'll provide
				the hot air balloon.
			</p>
		</section>
	);
};

export default Listing;
