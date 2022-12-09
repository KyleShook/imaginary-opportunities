import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you ready to boldly go where no frontend developer has gone before?
				Join the crew of the Starship Enterprise as an entry-level frontend
				developer!
			</p>
			<p>
				In this role, you'll be responsible for bringing the Enterprise's
				control panels and consoles to life, using your expertise in HTML, CSS,
				and JavaScript. You'll work closely with the engineering team to ensure
				smooth and seamless user experiences for Captain Kirk and the rest of
				the crew.
			</p>
			<p>
				Experience with React, Redux, and responsive design is a plus, but not
				required. You'll have access to the latest and greatest in space-age
				technology, including our proprietary Warp Drive CSS framework.
			</p>
			<p>
				So if you're looking to take your frontend development skills to new
				heights, apply now and let's go explore the galaxy together! Just beware
				of any pesky Klingons or Romulans along the way.
			</p>
		</section>
	);
};

export default Listing;
