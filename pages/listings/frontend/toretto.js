import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you ready to join the "fast and furious" world of frontend
				development? Look no further! Dominic Toretto is seeking a skilled and
				passionate frontend developer to join his elite team.
			</p>
			<p>
				In this role, you'll be responsible for creating stunning user
				interfaces for our high-speed web applications. No task is too daring or
				impossible for you to tackle. And don't worry, we'll provide you with
				all the nitrous oxide you need to boost your coding skills to the next
				level.
			</p>
			<p>
				But it's not all about speed and thrills. We also value attention to
				detail and a love for clean, efficient code. So if you're ready to take
				your coding skills for a spin, apply now!
			</p>
			<p>Qualifications:</p>
			<ul>
				<li>At least 1 year of experience in frontend development</li>
				<li>Proficiency in HTML, CSS, and JavaScript</li>
				<li>A passion for fast cars (bonus points if you can drift)</li>
				<li>
					No fear of facing off against the law (we're not above a little
					"creative" driving)
				</li>
			</ul>
			<p>So rev your engines and apply now to join the Toretto team!</p>
		</section>
	);
};

export default Listing;
