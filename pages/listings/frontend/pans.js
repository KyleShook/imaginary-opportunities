import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Pan's Labyrinth is looking for an entry-level frontend developer to join
				our team of mischievous fairies and mythical creatures.
			</p>
			<p>
				As a frontend developer, you will be responsible for creating beautiful
				and engaging interfaces for our enchanted web applications. You'll work
				closely with our team of creative designers to bring their visions to
				life.
			</p>
			<p>
				To be considered for this role, you must have a passion for frontend
				development and a strong understanding of HTML, CSS, and JavaScript.
				Experience with AngularJS and ReactJS is a plus.
			</p>
			<p>
				But most importantly, you must have a sense of humor and a love for all
				things fantastical. No fauns or centaurs need apply.
			</p>
			<p>
				So if you're ready to enter the world of Pan's Labyrinth and bring your
				frontend development skills to life, apply now!
			</p>
		</section>
	);
};

export default Listing;
