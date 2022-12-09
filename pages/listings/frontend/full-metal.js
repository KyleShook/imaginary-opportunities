import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Edward Elric, The Fullmetal Alchemist, is seeking a passionate and
				dedicated entry-level frontend developer to join his team.
			</p>
			<p>
				In this role, you will be responsible for developing and maintaining the
				website for Edward's alchemy research. You will be expected to have a
				strong understanding of HTML, CSS, and JavaScript, and be able to create
				engaging and dynamic web experiences for our users.
			</p>
			<p>
				But be warned - this job is not for the faint of heart. The pursuit of
				alchemy can be a lonely and dangerous road, and you may be required to
				work long hours and face challenges that push the boundaries of science
				and morality.
			</p>
			<p>
				If you are up for the challenge, and want to be a part of a team that is
				dedicated to unlocking the secrets of the universe, please apply today.
			</p>
			<p>
				Note: previous experience with transmutation circles is a plus, but not
				required.
			</p>
		</section>
	);
};

export default Listing;
