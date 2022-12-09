import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Winnie the Pooh is looking for a new frontend developer to join his team
				at the Hundred Acre Wood! As our resident honey connoisseur and master
				of the "think, think, think" method, Winnie is in search of a skilled
				and creative individual who can help bring his website to life.
			</p>
			<p>
				In this role, you'll work closely with our tech-savvy bear, Tigger, to
				design and develop user-friendly and visually appealing interfaces.
				You'll also collaborate with our resident bookworm, Rabbit, to ensure
				our content is optimized for search engines and easy to navigate.
			</p>
			<p>Qualifications:</p>
			<ul>
				<li>Bachelor's degree in computer science or a related field</li>
				<li>Experience with HTML, CSS, and JavaScript</li>
				<li>Familiarity with frontend frameworks such as React or Angular</li>
				<li>Strong attention to detail and problem-solving skills</li>
				<li>A love for honey and all things Winnie the Pooh</li>
			</ul>
			<p>
				If this sounds like the perfect job for you, send us your honey-sweet
				resume and let's make some magic happen! And don't forget to include
				your favorite Winnie the Pooh quote.
			</p>
		</section>
	);
};

export default Listing;
