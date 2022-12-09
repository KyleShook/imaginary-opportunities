import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Calling all aspiring frontend developers! Are you ready to join the
				dynamic team at Wayne Enterprises and work on cutting-edge projects for
				the one and only Batman?
			</p>
			<p>
				We're looking for a skilled frontend developer with a keen eye for
				design and a passion for bringing creative ideas to life. As a member of
				the Wayne Enterprises team, you'll have the opportunity to work closely
				with Batman himself on a range of exciting projects, including
				developing sleek and intuitive interfaces for his cutting-edge gadgets
				and crime-fighting tools.
			</p>
			<p>
				This is a rare opportunity to work with one of the world's most iconic
				superheroes and to truly make a difference in the fight against crime.
				And don't worry, the Dark Knight always pays very well.
			</p>
			<p>
				So if you're ready to take on the challenge and become a valuable member
				of the Wayne Enterprises team, apply now! We can't wait to hear from
				you.
			</p>
		</section>
	);
};

export default Listing;
