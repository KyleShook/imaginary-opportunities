import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Looking to join the Thundercats team? We're seeking an entry-level
				frontend developer to help us build out the coolest website in the
				kingdom. In this role, you'll be responsible for coding and maintaining
				the Thundercats' website, ensuring it's as sleek and powerful as
				Lion-O's sword.
			</p>
			<p>
				As part of the Thundercats team, you'll get to work with some of the
				most talented and passionate developers in the galaxy. You'll also get
				to rub shoulders with our resident cats - Cheetara, Panthro, and Tygra.
				And if you're lucky, you might even get to meet Snarf.
			</p>
			<p>
				To be successful in this role, you'll need to have a strong
				understanding of HTML, CSS, and JavaScript. A passion for the
				Thundercats is a plus.
			</p>
			<p>
				So if you're ready to join the fight against the evil Mumm-Ra, apply now
				and become a member of the Thundercats team!
			</p>
		</section>
	);
};

export default Listing;
