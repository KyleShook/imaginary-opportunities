import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a kung fu master of frontend development? Ip Man, the legendary
				martial arts master, is looking for a new frontend developer to join his
				team.
			</p>
			<p>
				In this role, you'll be responsible for creating stunning user
				interfaces for Ip Man's online training platform. You'll work closely
				with our back-end developers to ensure smooth and seamless user
				experiences.
			</p>
			<p>
				To succeed in this role, you must be proficient in HTML, CSS, and
				JavaScript, and have a strong understanding of responsive design
				principles. Bonus points if you can perform a flying kick while coding.
			</p>
			<p>
				In return, you'll get to work alongside Ip Man and learn the secrets of
				Wing Chun. So if you're ready to take your frontend skills to the next
				level, apply now!
			</p>
		</section>
	);
};

export default Listing;
