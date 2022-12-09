import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a superhero in disguise? Do you have the skills to save the
				world from buggy code and boring user experiences? If so, we want you!
			</p>
			<p>
				The Fantastic Four is looking for a frontend developer to join our team
				of crime-fighting coders. In this role, you'll use your powers of HTML,
				CSS, and JavaScript to create dynamic and engaging web applications.
			</p>
			<p>Some of your responsibilities will include:</p>
			<ul>
				<li>Developing new user-facing features using React and Redux</li>
				<li>
					Building reusable components and frontend libraries for future use
				</li>
				<li>Translating designs and wireframes into high-quality code</li>
				<li>Optimizing applications for maximum speed and scalability</li>
			</ul>
			<p>
				To succeed in this role, you'll need to have experience with modern
				frontend technologies and a passion for creating exceptional user
				experiences. You'll also need to be able to work well under pressure, as
				you never know when the next villain will strike.
			</p>
			<p>
				But don't worry - you won't be fighting crime alone. You'll have the
				support of the Fantastic Four, including Mr. Fantastic, the Invisible
				Woman, the Human Torch, and the Thing. Together, you'll use your
				combined powers to create web applications that are out of this world.
			</p>
			<p>
				So if you think you have what it takes to join the Fantastic Four, apply
				now and let's see if you have what it takes to become a superhero
				developer.
			</p>
		</section>
	);
};

export default Listing;
