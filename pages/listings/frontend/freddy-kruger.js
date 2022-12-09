import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Freddy Kruger is looking for a frontend developer to join his team in
				Elm Street. In this role, you will be responsible for designing and
				implementing user-friendly web interfaces that will haunt our users'
				dreams.
			</p>
			<p>
				The ideal candidate will have experience with HTML, CSS, and JavaScript,
				as well as a strong sense of horror and the ability to make users scream
				in terror. You must be able to work well under pressure, as you will be
				dealing with deadlines that are as sharp as Freddy's claws.
			</p>
			<p>
				We offer a competitive salary, flexible working hours, and the
				opportunity to work with a team of talented and scary developers.
			</p>
			<p>
				If you are ready to take on this terrifying challenge, please send us
				your resume and a portfolio of your most frightening work. We can't wait
				to see what nightmares you can create for our users.
			</p>
		</section>
	);
};

export default Listing;
