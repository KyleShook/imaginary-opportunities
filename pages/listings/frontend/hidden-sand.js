import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				The Hidden Sand Village is seeking a frontend developer to join our
				team. In this role, you will be responsible for building and maintaining
				the user-facing elements of our website, ensuring a seamless and
				engaging experience for our users.
			</p>
			<p>
				As a member of our team, you will have the opportunity to work closely
				with Gaara, the Kazekage of the Hidden Sand Village. While Gaara can be
				a bit intense at times, don't worry - we've got plenty of sand to calm
				him down if necessary.
			</p>
			<p>
				The ideal candidate for this position will have experience with HTML,
				CSS, and JavaScript, as well as a strong sense of design and user
				experience. Bonus points if you're familiar with the concept of "sand
				manipulation" and can use it to help Gaara relax when needed.
			</p>
			<p>
				So if you're a frontend developer looking for a challenging and
				rewarding role, come join our team at The Hidden Sand Village.{" "}
			</p>
		</section>
	);
};

export default Listing;
