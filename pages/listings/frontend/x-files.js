import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Attention all aspiring agents of the paranormal! The X-Files division of
				the FBI is looking for a frontend developer to join our team of intrepid
				investigators.
			</p>
			<p>
				As a frontend developer for the X-Files, you'll be tasked with creating
				and maintaining web-based interfaces for our top-secret investigations
				into the unexplained. This is not a job for the faint of heart - you'll
				be working with some of the most dangerous and mysterious phenomena
				known to man.
			</p>
			<p>
				You'll need a strong background in HTML, CSS, and JavaScript, as well as
				a passion for all things X-Files. A sense of humor is a must - our
				investigations can get pretty strange, and we need someone who can keep
				up with the absurd.
			</p>
			<p>
				If you're up for the challenge, apply now and join the ranks of the
				X-Files division. Just remember: trust no one, and always carry a
				flashlight. It's a dark world out there.
			</p>
		</section>
	);
};

export default Listing;
