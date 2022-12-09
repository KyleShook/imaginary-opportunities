import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a frontend developer with a knack for creating monstrously good
				user experiences? Look no further - Monsters, Inc. is hiring!
			</p>
			<p>
				As a frontend developer at Monsters, Inc., you'll be responsible for
				bringing our spooky and delightful designs to life on the web. You'll
				work closely with our team of designers and developers to create
				intuitive and engaging user interfaces that keep our customers coming
				back for more scares.
			</p>
			<p>
				Our ideal candidate is someone who is passionate about frontend
				development and has a sense of humor. You'll need to be comfortable
				working in a fast-paced, ever-changing environment and be able to handle
				the occasional scream from our customers.
			</p>
			<p>
				If you have experience with HTML, CSS, and JavaScript and are ready to
				join the ranks of the most feared company in the world, we want to hear
				from you! Apply now and let's make some magic (and maybe a few
				nightmares) together.
			</p>
		</section>
	);
};

export default Listing;
