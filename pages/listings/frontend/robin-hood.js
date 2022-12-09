import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a jester with mad HTML skills? Robin Hood is seeking a frontend
				developer to join our merry band of thieves. As a member of our team,
				you'll use your coding prowess to steal from the rich and give to the
				poor (or at least make our website look really snazzy).
			</p>
			<p>Responsibilities:</p>
			<ul>
				<li>
					Implement stunning and user-friendly interfaces using HTML, CSS, and
					JavaScript
				</li>
				<li>
					Collaborate with our team of mischievous designers and back-end
					developers to create innovative web experiences
				</li>
				<li>Rob the occasional castle (just kidding...or are we?)</li>
			</ul>
			<p>
				Bonus points if you have experience with archery and can shoot a
				bullseye on our office dartboard. So put on your tights and apply today
				to join the legend of Robin Hood.
			</p>
		</section>
	);
};

export default Listing;
