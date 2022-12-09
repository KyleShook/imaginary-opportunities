import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				We at Mogwai are looking for an entry-level frontend developer to join
				our team of gremlins and mogwais. In this role, you'll work on building
				and maintaining our web applications, ensuring that they are
				user-friendly and aesthetically pleasing.
			</p>
			<p>
				As a frontend developer at Mogwai, you'll need to have a strong
				understanding of HTML, CSS, and JavaScript, as well as experience with
				modern frontend frameworks like React or Vue.js. You'll also need to be
				detail-oriented and able to work in a fast-paced environment.
			</p>
			<p>
				But most importantly, you'll need to be able to resist the urge to feed
				our mogwais after midnight. Trust us, you don't want to see what happens
				when they get their hands on some food after the sun goes down.
			</p>
			<p>
				If you think you have what it takes to join our team, please apply now.
				We can't wait to see what you can do!
			</p>
		</section>
	);
};

export default Listing;
