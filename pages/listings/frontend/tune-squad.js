import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a frontend developer looking to join the Tune Squad? We're
				looking for a new member to help us shoot some HTML and CSS hoops and
				slam dunk some JavaScript bugs.
			</p>
			<p>
				As part of our team, you'll be responsible for building and maintaining
				the frontend of our website, ensuring a smooth user experience for all
				of our fans. You'll work closely with our design team to bring their
				vision to life and make sure our site looks fresh and funky.
			</p>
			<p>
				We're looking for someone who is a team player, has a keen eye for
				design, and isn't afraid to take on new challenges. Bonus points if
				you're a fan of the Looney Tunes and can reference all of the classic
				episodes.
			</p>
			<p>
				So, if you're ready to join the Tune Squad and help us dominate the
				frontend game, apply now!
			</p>
		</section>
	);
};

export default Listing;
