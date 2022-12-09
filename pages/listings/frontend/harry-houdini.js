import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				<strong>
					Wanted: Entry Level Frontend Developer for Harry Houdini
				</strong>
			</p>
			<p>
				Are you a magician with a knack for coding? Do you have the ability to
				make websites disappear in a puff of smoke? If so, we have the perfect
				job for you!
			</p>
			<p>
				We are looking for an entry level frontend developer to join the team at
				Harry Houdini Inc. As a frontend developer, you will be responsible for
				creating and maintaining our website, as well as implementing creative
				solutions to make it as mystifying as possible.
			</p>
			<p>
				To be successful in this role, you should have a strong understanding of
				HTML, CSS, and JavaScript. Experience with React, Angular, or Vue.js is
				a plus. Most importantly, you should have a passion for magic and the
				ability to create illusions on the web.
			</p>
			<p>
				If you think you have what it takes to join the ranks of Harry Houdini
				and his team of tricksters, please apply now. And remember, no handcuffs
				or chains can hold you back from this amazing opportunity!
			</p>
		</section>
	);
};

export default Listing;
