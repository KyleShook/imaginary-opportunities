import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a frontend developer who loves a good adventure? Do you dream of
				working alongside the legendary heroes Zelda and Link to create epic
				websites and applications? Well, have we got the job for you!
			</p>
			<p>
				We are seeking a skilled frontend developer to join our team at Hyrule
				Castle. In this role, you will work closely with Zelda and Link to
				design and develop user-friendly interfaces for our kingdom's online
				presence.
			</p>
			<p>Your duties will include:</p>
			<ul>
				<li>
					Collaborating with Zelda and Link to determine project requirements
					and design concepts
				</li>
				<li>
					Translating design concepts into functional, user-friendly web pages
					and applications
				</li>
				<li>
					Testing and debugging web pages and applications to ensure they are
					free of bugs and glitches
				</li>
				<li>
					Continuously updating and improving the user experience of our
					kingdom's online presence
				</li>
			</ul>
			<p>
				We promise you'll never be bored in this role - with Zelda and Link by
				your side, you'll never know what exciting quests you'll embark on next.
				Just one thing - do not, under any circumstances, touch the chickens.
			</p>
			<p>Apply now and join our team of heroes!</p>
		</section>
	);
};

export default Listing;
