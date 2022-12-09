import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Thrall, the world's leading provider of orc-powered technology
				solutions, is looking for an entry level frontend developer to join our
				horde of skilled developers.
			</p>
			<p>
				As a member of our team, you will be responsible for using your fearsome
				coding abilities to create stunning user interfaces and improve the user
				experience for our customers. You will work closely with our designers
				and backend developers to ensure that our products are intuitive and
				easy to use, even for the most battle-hardened warriors.
			</p>
			<p>
				In this role, you will have the opportunity to learn from some of the
				most skilled orc developers in the industry and gain valuable experience
				working on exciting projects for Thrall's many customers. You will also
				have access to our extensive training programs and resources to help you
				grow your skills and advance your career.
			</p>
			<p>Qualifications:</p>
			<ul>
				<li>A strong desire to conquer the frontend development world</li>
				<li>Excellent problem-solving skills and attention to detail</li>
				<li>Experience with HTML, CSS, and JavaScript</li>
				<li>
					Familiarity with orc culture and customs (preferred, but not required)
				</li>
			</ul>
			<p>
				If you have a passion for frontend development and are ready to join
				Thrall's horde of skilled developers, apply today and let us know why
				you would make a great addition to our team!
			</p>
		</section>
	);
};

export default Listing;
