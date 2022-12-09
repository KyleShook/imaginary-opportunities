import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			<p>
				Are you a code wizard who can speak the language of animals? Look no
				further, because Dr Dolittle is hiring a frontend developer!
			</p>
			<p>
				In this role, you'll be working closely with our team of veterinarians
				and animal experts to bring the wonders of the animal kingdom to life on
				our website and mobile app. Whether it's a playful puppy or a majestic
				lion, you'll be the one making sure our users can interact with all of
				our furry friends in the most user-friendly way possible.
			</p>
			<p>
				But don't worry, you won't be working alone. Our team is full of animal
				lovers who will support you every step of the way. And who knows, maybe
				you'll even pick up a few tips on how to talk to the animals yourself!
			</p>
			<p>To be considered for this role, you should have:</p>
			<ul>
				<li>A passion for all things animal-related</li>
				<li>Strong skills in HTML, CSS, and JavaScript</li>
				<li>
					Experience with responsive design and cross-browser compatibility
				</li>
				<li>
					A sense of humor (trust us, it will come in handy when dealing with
					some of our more... eccentric employees)
				</li>
			</ul>
			<p>
				So if you're ready to join the world of Dr Dolittle and make a real
				difference in the lives of animals and their human companions, apply
				now! And don't forget to include your favorite animal in the subject
				line of your application. We can't wait to hear from you!
			</p>
		</section>
	);
};

export default Listing;
