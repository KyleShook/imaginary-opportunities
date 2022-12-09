import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a frontend developer with a passion for the macabre? Do you have
				experience in HTML, CSS, and JavaScript? If so, then you might be the
				perfect fit to join the team at Frankenstein's Monster!
			</p>
			<p>
				As a frontend developer at Frankenstein's Monster, you'll be responsible
				for creating and maintaining our website, which serves as a hub for all
				things Frankenstein. You'll be tasked with developing and implementing
				new features and functionality to improve the user experience for our
				monstrous clientele.
			</p>
			<p>
				In this role, you'll be working closely with our in-house design team to
				bring their creations to life, and collaborating with our back-end
				developers to ensure a seamless user experience. You'll also be
				responsible for maintaining and updating the website to ensure it
				remains bug-free and functioning at its best.
			</p>
			<p>
				If you think you're the right fit for this spook-tacular role, we'd love
				to hear from you! Please apply with your resume and a brief explanation
				of why you're the perfect candidate to join the team at Frankenstein's
				Monster.
			</p>
		</section>
	);
};

export default Listing;
