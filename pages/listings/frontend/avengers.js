import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a frontend developer who loves superheroes and saving the world?
				Look no further! The Avengers are in need of a new entry level frontend
				developer to join our team.
			</p>
			<p>
				As part of our team, you will be responsible for creating and
				maintaining the user interface for our advanced technology and weapons
				systems. Your coding skills will be put to the test as you help us take
				down the bad guys and keep the world safe.
			</p>
			<p>
				But be warned, this job isn't for the faint of heart. You'll need to be
				able to handle high-pressure situations and work well under the constant
				threat of an alien invasion or supervillain attack.
			</p>
			<p>
				If you think you have what it takes to join the ranks of Iron Man,
				Captain America, and the rest of the Avengers, we want to hear from you!
				Apply now and let's see if you have what it takes to be an Avenger.
			</p>
		</section>
	);
};

export default Listing;
