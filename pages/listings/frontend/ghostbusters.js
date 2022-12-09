import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>Title: Entry-Level Frontend Developer for The Ghostbusters</p>
			<p>
				Are you looking for a job that will truly haunt you? Look no further!
				The Ghostbusters are seeking a frontend developer to join our team of
				paranormal investigators.
			</p>
			<p>
				In this role, you'll be responsible for creating and maintaining our
				website, ensuring that it's both user-friendly and ghost-friendly.
				You'll be working closely with our team of ghost hunters, so be prepared
				to face some terrifying challenges.
			</p>
			<p>Qualifications:</p>
			<ul>
				<li>Proficiency in HTML, CSS, and JavaScript</li>
				<li>A love for all things spooky</li>
				<li>
					Ability to handle ghosts, ghouls, and other paranormal entities with
					grace and professionalism
				</li>
			</ul>
			<p>
				If you think you have what it takes to join our team, please send your
				resume, along with a cover letter explaining why you're the perfect
				candidate to<strong> jobs@ghostbusters.com</strong>.
			</p>
			<p>Remember: Don't cross the streams!</p>
		</section>
	);
};

export default Listing;
