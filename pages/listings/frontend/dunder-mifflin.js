import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Attention all aspiring frontend developers! Do you have a passion for
				beets and paper? Are you tired of boring job listings that don't allow
				you to express your love for these two amazing things? Then this job is
				for you!
			</p>
			<p>
				Dwight Shrute, Assistant to the Regional Manager at Dunder Mifflin, is
				looking for a talented frontend developer to join his team. In this
				role, you will work closely with Dwight to develop and maintain
				high-quality web applications using the latest technologies.
			</p>
			<p>
				To be successful in this role, you must have a strong understanding of
				HTML, CSS, and JavaScript, as well as experience with popular frameworks
				such as React and Angular. A love for beets and paper is a must, and any
				experience with beet-based web design or paper-based user interfaces
				will be a huge plus.
			</p>
			<p>
				In addition to your technical skills, we are looking for someone who is
				a team player and can thrive in a fast-paced, high-pressure environment.
				If you think you have what it takes to join Dwight's team, we want to
				hear from you!
			</p>
			<p>
				Note: Please do not apply if you have any experience with putting things
				in jello. That is strictly prohibited at Dunder Mifflin.
			</p>
		</section>
	);
};

export default Listing;
