import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Goku and Vegeta are seeking a highly skilled and motivated Frontend
				Developer to join our team. The ideal candidate will have a power level
				of at least 9000 and experience with space and time travel.
			</p>
			<p>
				As a Frontend Developer, you will be responsible for designing and
				implementing user-friendly and visually appealing web interfaces. You
				will work closely with our team of developers and designers to ensure
				seamless integration and performance of our applications.
			</p>

			<p>Requirements:</p>
			<ul>
				<li>Power level of at least 9000</li>
				<li>Experience with space and time travel</li>
				<li>Proficiency in HTML, CSS, and JavaScript</li>
				<li>Knowledge of frontend frameworks such as React, Angular, or Vue</li>
				<li>Strong problem-solving and communication skills</li>
			</ul>
			<p>
				Note: We are currently under attack from Frieza, so candidates must be
				willing to take on any challenges that may arise.
			</p>
			<p>
				If you are a skilled and dedicated Frontend Developer with the power
				level and experience required, we encourage you to apply. Join our team
				and help us defend against Frieza and continue to build innovative
				applications.
			</p>
		</section>
	);
};

export default Listing;
