import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Han Solo is looking for a frontend developer who is not afraid to take
				risks and can handle the fast-paced, high-stress environment of the
				Millennium Falcon.
			</p>
			<p>
				As a frontend developer for Han Solo, you will be responsible for
				designing and implementing user interfaces for Han's many schemes and
				missions. You must be able to work quickly and efficiently to keep up
				with Han's ever-changing plans.
			</p>
			<p>
				The ideal candidate will have experience with HTML, CSS, and JavaScript,
				as well as a keen eye for design. Bonus points if you have a working
				knowledge of the Kessel Run or can fix the hyperdrive with just a
				paperclip and a stick of gum.
			</p>
			<p>
				Don't worry about benefits or a 401k - Han doesn't believe in those
				kinds of things. But if you're the right person for the job, you'll get
				to fly the Falcon, shoot some TIE fighters, and maybe even save the
				galaxy. So if you're ready for an adventure, send us your application.
				Just make sure you can outrun the Empire and dodge a few asteroids along
				the way.
			</p>
		</section>
	);
};

export default Listing;
