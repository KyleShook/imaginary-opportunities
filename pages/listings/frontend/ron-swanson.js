import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Attention Frontend Developers: Are you tired of working for soulless
				corporations and want to work for a true American hero? Look no further!
			</p>
			<p>
				Ron Swanson, the greatest man to ever live, is seeking a Frontend
				Developer to join his team at the Parks and Recreation Department. In
				this role, you'll be responsible for creating and maintaining the
				department's website, ensuring it accurately reflects Ron's masculine
				and no-nonsense attitude.
			</p>
			<p>
				We're looking for a self-starter with a strong sense of individuality
				and a willingness to defy convention. If you can handle a little bit of
				chaos and can produce top-notch code, even while chugging a bottle of
				Lagavulin, you might just be the perfect fit for our team.
			</p>
			<p>
				So if you're ready to work for a true American legend and can handle
				Ron's gruff exterior, apply now! And remember, never half-ass two
				things. Whole-ass one thing.
			</p>
		</section>
	);
};

export default Listing;
