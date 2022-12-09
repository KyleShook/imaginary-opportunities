import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Sherlock Holmes, the world's greatest detective, is seeking a skilled
				frontend developer to join his team at 221B Baker Street.
			</p>
			<p>
				As a frontend developer at Sherlock Holmes, you'll be responsible for
				creating engaging and intuitive user experiences for our clients. You'll
				work closely with our design team to bring our cases to life on the web.
			</p>
			<p>
				In this role, you'll be expected to have a deep understanding of HTML,
				CSS, and JavaScript, as well as a passion for solving puzzles and
				cracking codes. Bonus points if you're a master of disguises and can
				blend in with any crowd.
			</p>
			<p>
				If you think you have what it takes to join the ranks of Sherlock
				Holmes, we want to hear from you. Apply now to become a part of the
				world's greatest detective agency!
			</p>
		</section>
	);
};

export default Listing;
