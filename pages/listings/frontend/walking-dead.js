import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Attention all zombies! Are you tired of aimlessly wandering the
				post-apocalyptic wasteland in search of brains? Are you ready to put
				your undead skills to use in a meaningful way? Look no further!
			</p>
			<p>
				We are seeking a Frontend Developer to join our team of survivors at the
				Alexandria Safe-Zone. As a member of our team, you will be responsible
				for building and maintaining our web-based defense systems, ensuring the
				safety of our community against the undead horde.
			</p>
			<p>
				Ideal candidates will have experience in HTML, CSS, and JavaScript, as
				well as a keen eye for detail and a willingness to fight off walkers
				with a baseball bat (or a crossbow, if you're feeling fancy). Bonus
				points if you've ever led a group of survivors on a supply run.
			</p>
			<p>
				So if you're ready to put your undead brain to good use, apply now! Just
				make sure you leave your weapons at the gate - we don't need any more
				bloodshed inside the walls.
			</p>
		</section>
	);
};

export default Listing;
