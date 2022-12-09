import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you ready to join the fight for Earthrealm? Liu Kang is looking for
				a skilled frontend developer to join his team at the Shaolin Temple.
			</p>
			<p>
				As a member of Liu Kang's crew, you'll be responsible for building and
				maintaining the Mortal Kombat website, ensuring that it's always ready
				for battle. This includes implementing responsive design, creating
				dynamic user experiences, and ensuring that the site is optimized for
				all devices.
			</p>
			<p>
				In addition to your technical skills, we're looking for someone with a
				sense of humor and a love for all things Mortal Kombat. Bonus points if
				you know your way around a flaming uppercut.
			</p>
			<p>
				So if you're ready to take on Shang Tsung and his evil forces, apply now
				to join Liu Kang's team at the Shaolin Temple. May the power of Raiden
				be with you.
			</p>
		</section>
	);
};

export default Listing;
