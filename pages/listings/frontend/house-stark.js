import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>Job Title: Frontend Developer</p>
			<p>Company: John Snow and the Stark Family</p>
			<p>Location: Winterfell</p>
			<p>Job Description:</p>
			<p>
				Are you a master of HTML, CSS, and JavaScript? Do you have a keen eye
				for design and a passion for bringing websites to life? If so, we have
				the perfect job for you!
			</p>
			<p>
				Join John Snow and the Stark family as a frontend developer and help us
				create stunning websites for our various businesses and ventures. From
				building responsive layouts to implementing engaging animations and
				effects, you'll play a crucial role in bringing our vision to life.
			</p>
			<p>
				But be warned: working for the Starks can be dangerous. You never know
				when when the Night King will come knocking. But hey, at least you'll
				have Jon Snow on your side.
			</p>
			<p>If you think you have what it takes to join the team, apply now! </p>
			<p>
				<strong>Please note:</strong> As a member of John Snow's team, you must
				be willing to swear fealty to House Stark and be prepared to face the
				White Walkers. Winter is coming, after all.
			</p>
		</section>
	);
};

export default Listing;
