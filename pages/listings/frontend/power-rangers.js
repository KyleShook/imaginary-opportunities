import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a frontend developer with a passion for spandex and fighting
				evil? Do you have what it takes to join the Power Rangers team and help
				save the world from the forces of darkness?
			</p>
			<p>
				We're looking for an entry-level frontend developer to join our team of
				superheroes at Power Rangers HQ. In this role, you'll be responsible for
				creating and maintaining the user interface for our website and mobile
				apps, as well as collaborating with our design and development teams to
				ensure a seamless user experience.
			</p>
			<p>
				We're looking for someone with experience in HTML, CSS, and JavaScript,
				as well as a strong understanding of responsive design and cross-browser
				compatibility. Bonus points if you can create a MegaZord-sized app
				without breaking a sweat.
			</p>
			<p>
				So if you're ready to join the ranks of the Mighty Morphin Power Rangers
				and help us defeat Rita Repulsa and her evil minions, apply now!
			</p>
		</section>
	);
};

export default Listing;
