import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a fearless and mischievous individual with a keen eye for design
				and a knack for problem-solving? Do you have a hook for a hand and a
				love for all things pirates? If so, we want you!
			</p>
			<p>
				Captain Hook is looking for a Frontend Developer to join our
				swashbuckling crew. In this role, you'll be responsible for building and
				maintaining our website, creating engaging user experiences, and solving
				technical challenges with your clever wit and cunning skills.
			</p>
			<p>To succeed in this role, you'll need:</p>
			<ul>
				<li>A passion for pirates and all things hook-related</li>
				<li>Proficiency in HTML, CSS, and JavaScript</li>
				<li>
					Experience with responsive design and cross-browser compatibility
				</li>
				<li>
					Strong attention to detail and the ability to work independently
				</li>
				<li>
					A sense of humor and a willingness to get your hands dirty (literally,
					if necessary)
				</li>
			</ul>
			<p>
				If you're ready to take on this exciting adventure and become a valuable
				member of our crew, apply now! Arrrr!
			</p>
		</section>
	);
};

export default Listing;
