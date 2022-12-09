import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				Wanted: Entry-level frontend developer to join Sam and Dean Winchester
				on their never-ending battle against the supernatural.
			</p>
			<p>
				Are you ready to join the fight against evil? Do you have a passion for
				coding and a keen eye for design? If so, we want you!
			</p>
			<p>
				As a frontend developer for Sam and Dean Winchester, you will be
				responsible for designing and implementing user-friendly interfaces for
				our various supernatural hunting tools. From demon-tracking apps to
				ghost-sensing devices, you will play a crucial role in helping us save
				the world one hunt at a time.
			</p>
			<p>Qualifications:</p>
			<ul>
				<li>Strong knowledge of HTML, CSS, and JavaScript</li>
				<li>Familiarity with frontend frameworks such as React and Angular</li>
				<li>Ability to work under pressure and tight deadlines</li>
				<li>Bonus points if you know how to code in Enochian</li>
			</ul>
			<p>
				So, if you're ready to put your skills to the test and help us take down
				some monsters, send us your resume and a short message about why you're
				the perfect candidate for the job. Just be warned: this job may involve
				late nights, demon fights, and the occasional awkward family dinner. But
				hey, at least you'll get to work with two of the coolest (and hottest)
				hunters out there.
			</p>
		</section>
	);
};

export default Listing;
