import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a frontend developer with a knack for creating pixel-perfect
				user interfaces? Do you have a passion for science and a love for the
				absurd? If so, we want you to join our team at Dexter's Laboratory!
			</p>
			<p>
				As a frontend developer at Dexter's Laboratory, you'll work closely with
				our resident genius, Dexter, to create innovative and exciting user
				experiences for our top-secret experiments and gadgets. You'll have the
				opportunity to use your skills to bring Dexter's wildest ideas to life,
				from mind-reading hats to laser-shooting robots.
			</p>
			<p>
				But be warned, this job isn't for the faint of heart. You'll need to be
				ready to deal with the occasional interference from Dexter's mischievous
				sister, Dee Dee, who has a habit of ruining his experiments (and our
				user interfaces).
			</p>
			<p>
				If you're up for the challenge, apply now to join our team at Dexter's
				Laboratory! We can't wait to see what you'll create.
			</p>
		</section>
	);
};

export default Listing;
