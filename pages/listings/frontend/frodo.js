import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a skilled frontend developer looking for a once-in-a-lifetime
				adventure? Look no further! Frodo Baggins, hobbit extraordinaire, is
				seeking a frontend developer to join him on his epic quest to destroy
				the Ring of Power.
			</p>
			<p>
				As a member of our small, but mighty team, you will be responsible for
				building and maintaining the user interface for our web-based quest
				tracker. You must be able to work well under pressure, as the fate of
				Middle Earth depends on our success.
			</p>
			<p>Qualifications:</p>
			<ul>
				<li>Experience with HTML, CSS, and JavaScript</li>
				<li>Strong problem-solving skills</li>
				<li>Comfortable working in a fast-paced, high-stress environment</li>
				<li>A willingness to travel to distant lands and battle dark forces</li>
				<li>
					Bonus points for experience with elvish languages and/or hand-to-hand
					combat
				</li>
			</ul>
			<p>
				This is not your average nine-to-five job. You will face challenges and
				dangers that most people only dream of. But if you are up to the task,
				you will join a fellowship of brave warriors and have the chance to save
				the world from the evil forces of Sauron.
			</p>
			<p>Apply now and embark on the adventure of a lifetime!</p>

			<p>
				Please note: do NOT apply to Sauron's job post. That would be a bad
				idea. Like, really bad.
			</p>
		</section>
	);
};

export default Listing;
