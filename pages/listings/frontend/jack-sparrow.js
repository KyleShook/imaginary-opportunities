import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Jack Sparrow, the most notorious pirate of the Caribbean, is in need of
				a frontend developer to join his crew.
			</p>
			<p>
				We're looking for someone with a strong understanding of HTML, CSS, and
				JavaScript, as well as a sense of adventure and a good sense of humor.
				The ideal candidate will have experience creating responsive and
				user-friendly websites, as well as a willingness to navigate the high
				seas and evade the British navy.
			</p>
			<p>
				As a member of Jack's crew, you'll be responsible for building and
				maintaining the website for the Black Pearl, as well as creating
				interactive elements for our treasure-hunting adventures. You'll also
				have the opportunity to learn from the best, as Jack is a master of web
				design (when he's not too busy avoiding the Kraken or searching for the
				Fountain of Youth).
			</p>
			<p>
				So if you're ready to embark on a thrilling and exciting career, apply
				now to join the Black Pearl crew. Arrrr!
			</p>
		</section>
	);
};

export default Listing;
