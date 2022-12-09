import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>

			<p>
				<strong>Entry Level Frontend Developer - The Matrix</strong>
			</p>
			<p>
				Do you want to work for the world's best boss? Do you have a passion for
				poorly designed websites and cringe-worthy coding practices? If so, we
				have the perfect job for you!
			</p>
			<p>
				As a member of the Dunder Mifflin Scranton branch, you will be
				responsible for creating and maintaining the company's online presence.
				This includes designing and implementing new features, fixing bugs, and
				generally making sure our website is the most poorly functioning one on
				the internet.
			</p>
			<p>
				But don't worry, you won't be alone. You'll have the full support of
				Michael Scott, who will be there to guide you through every step of the
				way. From his iconic "That's what she said" jokes to his questionable
				management decisions, you'll never have a dull moment on the job.
			</p>
			<p>
				So if you're ready to take on the challenge and make a name for yourself
				in the world of frontend development, apply now! We can't wait to see
				what you can do.
			</p>
		</section>
	);
};

export default Listing;
