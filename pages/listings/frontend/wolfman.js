import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a hairy, howling good frontend developer? The Wolfman is looking
				for a new pack member to join his team and help build out his website.
			</p>
			<p>
				As the frontend developer for the Wolfman, you'll be responsible for
				implementing the latest and greatest web technologies to showcase the
				Wolfman's terrifying talents. This includes developing and maintaining
				the Wolfman's online presence, as well as creating engaging user
				experiences for his fans.
			</p>
			<p>Qualifications:</p>
			<ul>
				<li>A keen sense of smell for detecting bugs and technical issues</li>
				<li>Experience with HTML, CSS, and JavaScript</li>
				<li>
					Strong communication skills to coordinate with the rest of the pack
				</li>
				<li>A love for the full moon and all things spooky</li>
			</ul>
			<p>
				If you're ready to join the pack and work for the Wolfman, apply now!
				Werewolf not required, but a plus.
			</p>
		</section>
	);
};

export default Listing;
