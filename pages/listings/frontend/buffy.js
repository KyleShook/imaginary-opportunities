import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Buffy the Vampire Slayer is looking for a frontend developer to join our
				team of fearless vampire slayers.
			</p>
			<p>
				As a frontend developer, you will be responsible for creating and
				maintaining the user interface for our web-based slaying platform. This
				includes designing and implementing user-friendly features, as well as
				optimizing the overall user experience.
			</p>
			<p>
				Experience with HTML, CSS, and JavaScript is a must, as well as a
				passion for slaying vampires.
			</p>
			<p>
				In this role, you will work closely with our team of slayers to ensure
				that our platform is always up to snuff for the latest demon-fighting
				action. You will also have the opportunity to hone your skills by
				participating in regular vampire-slaying training sessions.
			</p>
			<p>
				If you are a creative problem solver with a love for all things Buffy
				and a desire to help us save the world from vampires, demons, and other
				supernatural threats, we want to hear from you. Apply now to join our
				team of fearless frontend developers and help us slay the forces of
				evil.
			</p>
		</section>
	);
};

export default Listing;
