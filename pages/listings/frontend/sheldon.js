import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				We are looking for a frontend developer to join Sheldon Cooper's team of
				misfit geniuses.
			</p>
			<p>
				The ideal candidate will have a passion for coding and a love of science
				fiction. Experience with HTML, CSS, and JavaScript is a must, as well as
				a sense of humor and the ability to handle Sheldon's unique quirks.
			</p>
			<p>
				In this role, you will be responsible for building and maintaining the
				frontend of Sheldon's latest invention, a time-traveling train. You will
				also be tasked with creating visually appealing and user-friendly
				interfaces for Sheldon's various experiments and projects.
			</p>
			<p>
				If you're ready to put your skills to the test and join Sheldon on his
				quest for world domination, we want to hear from you. Apply now and
				become a part of the most brilliant team in the universe. Just beware of
				Leonard - he's not as smart as he thinks he is.
			</p>
		</section>
	);
};

export default Listing;
