import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Wizards, witches, and muggles alike! Hogwarts School of Witchcraft and
				Wizardry is seeking a dynamic and imaginative Gryffindor to join our
				team as our first ever Frontend Developer.
			</p>
			<p>
				In this magical role, you will be responsible for bringing the Hogwarts
				website to life with your coding skills and spellbinding creativity. You
				will work closely with our Head of Wizarding Communications to design
				and implement enchanting user experiences that transport our visitors to
				the enchanted castle.
			</p>
			<p>Key responsibilities:</p>
			<ul>
				<li>
					Use your Hogwarts-educated mind to translate the school's vision into
					a stunning and intuitive website
				</li>
				<li>
					Cast spells to create beautiful and responsive layouts using HTML,
					CSS, and JavaScript
				</li>
				<li>
					Work closely with the Hogwarts web team to ensure that the website's
					performance is as fast as a Nimbus 2000
				</li>
				<li>
					Develop interactive features that will make our visitors feel like
					they are actually exploring the castle
				</li>
			</ul>
			<p>Qualifications:</p>
			<ul>
				<li>
					Strong understanding of the Griffindor house values and the wizarding
					world
				</li>
				<li>
					Proficiency in HTML, CSS, and JavaScript (additional wizarding coding
					languages a plus)
				</li>
				<li>A passion for creating user-friendly and magical experiences</li>
				<li>
					Ability to work well under pressure and meet deadlines, even when
					faced with unexpected challenges like a misbehaving sorting hat
				</li>
			</ul>
			<p>
				If you are a Gryffindor with a love for all things magical and a talent
				for frontend development, we want to hear from you. Apply now and join
				us on our quest to create the most bewitching website in the wizarding
				world.
			</p>
		</section>
	);
};

export default Listing;
