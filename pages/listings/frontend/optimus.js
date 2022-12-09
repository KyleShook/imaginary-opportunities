import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a frontend developer with a passion for transforming into a
				semi-truck and fighting evil Decepticons? Look no further, because
				Optimus Prime is hiring!
			</p>
			<p>
				As a member of our team, you'll have the unique opportunity to work
				alongside the greatest Autobot leader of all time. Your responsibilities
				will include:
			</p>
			<ul>
				<li>
					Developing and maintaining our website, which serves as the
					headquarters for our fight against the Decepticons
				</li>
				<li>
					Implementing cutting-edge technologies to improve the functionality
					and user experience of our site
				</li>
				<li>
					Collaborating with other team members to design and execute web-based
					strategies to defeat Megatron and his minions
				</li>
				<li>
					Using your coding skills to help us create a more connected and united
					Autobot community
				</li>
			</ul>
			<p>
				While this job may not come with a salary (we're a non-profit
				organization, after all), it does come with the satisfaction of knowing
				you're helping to save the universe from the forces of evil. So if
				you're ready to take on this epic challenge, apply now! And remember:
				"Freedom is the right of all sentient beings."
			</p>
		</section>
	);
};

export default Listing;
