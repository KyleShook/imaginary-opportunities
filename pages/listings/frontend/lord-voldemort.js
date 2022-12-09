import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Lord Voldemort is seeking a motivated and skilled frontend developer to
				join his team of Dark Wizards. As a member of our team, you'll be
				responsible for creating and maintaining a range of web applications for
				our various evil endeavors.
			</p>
			<p>Key responsibilities include:</p>
			<ul>
				<li>
					Designing and implementing user-friendly interfaces for our dark
					websites
				</li>
				<li>
					Developing and optimizing HTML, CSS, and JavaScript for maximum evil
					efficiency
				</li>
				<li>
					Collaborating with our team of Dark Wizards to create powerful web
					solutions
				</li>
				<li>
					Testing and debugging web applications to ensure they work flawlessly
					for our evil purposes
				</li>
			</ul>
			<p>Qualifications:</p>
			<ul>
				<li>Strong understanding of frontend development technologies</li>
				<li>Excellent problem-solving and communication skills</li>
				<li>A passion for dark magic and all things evil</li>
			</ul>
			<p>
				If you're ready to take on a challenging and rewarding role in the world
				of Dark Magic, apply now to become a part of Lord Voldemort's team. Only
				the most talented and dedicated frontend developers need apply.
			</p>
			<p>Note: Muggles need not apply.</p>
		</section>
	);
};

export default Listing;
