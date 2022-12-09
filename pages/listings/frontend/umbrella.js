import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a frontend developer looking for a unique and exciting job
				opportunity? Look no further! The Umbrella Academy is looking for a new
				entry-level frontend developer to join our team of misfit superheroes.
			</p>
			<p>
				As a frontend developer at the Umbrella Academy, you'll be working
				closely with our team of superheroes to create and maintain the user
				interface for our top-secret, world-saving missions. And don't worry
				about commuting - our resident time traveler, Number Five, will likely
				teleport you to the Academy each day.
			</p>
			<p>
				The ideal candidate for this position will have a strong understanding
				of HTML, CSS, and JavaScript, as well as experience with responsive
				design and cross-browser compatibility. A sense of humor and a
				willingness to work with a diverse and eccentric team of superheroes is
				a must.
			</p>
			<p>
				So if you're ready to put your skills to the test and save the world
				(one pixel at a time), apply now! Just be prepared for the occasional
				punch-up with supervillains and the occasional time-traveling mishap.
			</p>
		</section>
	);
};

export default Listing;
