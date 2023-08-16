import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
	const [jobCount, setJobCount] = useState(0);

	// Alphabetizes the job listings so I don't have to. Don't judge me.
	// Should work with any section with the class name "job-list"
	useEffect(() => {
		const jobLists = document.querySelectorAll(".job-list");
		jobLists.forEach((list) => {
			const links = list.querySelectorAll("a");
			const linksArray = Array.from(links);
			linksArray.sort((a, b) => {
				const aText = a.textContent;
				const bText = b.textContent;
				if (aText < bText) {
					return -1;
				} else if (aText > bText) {
					return 1;
				} else {
					return 0;
				}
			});
			linksArray.forEach((link) => {
				list.appendChild(link);
			});
		});
	}, []);

	useEffect(() => {
		const jobCount = document.querySelectorAll(".job-list a").length;
		setJobCount(jobCount);
	}, []);

	return (
		<>
			<main>
				<section className="header">
					<h1>Imaginary Opportunities</h1>
					<h2>The job board of your dreams (or nightmares).</h2>
					<span className="emoji">✨</span>
					<p className="hero-copy">
						Welcome to Imaginary Opportunities, the job board where you can find
						exciting and unique job openings with your favorite fictional
						characters.
					</p>
					<p className="hero-copy">
						From mythical creatures and enchanted forests to futuristic cities
						and distant galaxies, our listings offer a wide range of
						opportunities for those looking to pursue their dream careers in the
						world of imagination.
					</p>
					<p className="hero-copy">
						We also have opportunities for those who prefer to tread the path of
						darkness, with listings for villainous roles and wicked schemes.
					</p>
					<hr />
					{jobCount && (
						<div className="contribution-container">
							<p>
								{jobCount} jobs and counting! Want to make it {jobCount + 1}?
							</p>

							<a
								href="https://github.com/KyleShook/imaginary-opportunities"
								target="_blank"
								rel="noreferrer"
								className="contribute"
							>
								Contribute to project
							</a>
						</div>
					)}
				</section>
				<h3>Currently hiring frontend developers:</h3>
				<section className="job-list">
					<Link href="/listings/frontend/lord-sauron">Lord Sauron</Link>
					<Link href="/listings/frontend/dunder-mifflin">Dunder Mifflin</Link>
					<Link href="/listings/frontend/death-star">Death Star</Link>
					<Link href="/listings/frontend/avengers">Avengers</Link>
					<Link href="/listings/frontend/hogwarts-gryffindor">
						Hogwarts - Gryffindor
					</Link>
					<Link href="/listings/frontend/hogwarts-slytherin">
						Hogwarts - Slytherin
					</Link>
					<Link href="/listings/frontend/one-piece">One Piece Pirates</Link>
					<Link href="/listings/frontend/hidden-leaf">Hidden Leaf Village</Link>
					<Link href="/listings/frontend/hidden-sand">Hidden Sand Village</Link>
					<Link href="/listings/frontend/dragonball">Goku and Vegeta</Link>
					<Link href="/listings/frontend/batman">Wayne Enterprises</Link>
					<Link href="/listings/frontend/x-men">X-men</Link>
					<Link href="/listings/frontend/harry-houdini">
						Harry Houdini Inc.
					</Link>

					<Link href="/listings/frontend/Peter-Griffin">Peter Griffin</Link>

					<Link href="/listings/frontend/captain-hook">Captain Hook</Link>
					<Link href="/listings/frontend/lord-voldemort">Lord Voldemort</Link>
					<Link href="/listings/frontend/thrall">Thrall</Link>
					<Link href="/listings/frontend/indiana-jones">Indiana Jones</Link>
					<Link href="/listings/frontend/jurassic-park">Jurassic Park</Link>
					<Link href="/listings/frontend/spiderman">Spider-Man</Link>
					<Link href="/listings/frontend/house-stark">House Stark</Link>
					<Link href="/listings/frontend/michael-scott">Michael Scott</Link>
					<Link href="/listings/frontend/diablo">
						Diablo, the Lord of Terror
					</Link>
					<Link href="/listings/frontend/mario-bros">Mario Bros.</Link>
					<Link href="/listings/frontend/sherlock-holmes">Sherlock Holmes</Link>
					<Link href="/listings/frontend/zelda">Zelda</Link>
					<Link href="/listings/frontend/full-metal">Fullmetal Alchemist</Link>
					<Link href="/listings/frontend/frodo">Frodo Baggins</Link>
					<Link href="/listings/frontend/professor-oak">Professor Oak</Link>
					<Link href="/listings/frontend/godzilla">Godzilla</Link>
					<Link href="/listings/frontend/matrix">Matrix</Link>
					<Link href="/listings/frontend/x-files">X-files</Link>
					<Link href="/listings/frontend/walking-dead">Walking Dead</Link>
					<Link href="/listings/frontend/urkel">Steve Urkel</Link>
					<Link href="/listings/frontend/scrooge-mcduck">Scrooge McDuck</Link>
					<Link href="/listings/frontend/peaky-blinders">Peaky Blinders</Link>
					<Link href="/listings/frontend/forrest-gump">Forrest Gump</Link>
					<Link href="/listings/frontend/dracula">Dracula</Link>

					<Link href="/listings/frontend/oz">Wizard of Oz</Link>
					<Link href="/listings/frontend/winchesters">
						Sam and Dean Winchester
					</Link>
					<Link href="/listings/frontend/stargate">Stargate SG-1</Link>
					<Link href="/listings/frontend/optimus">Optimus Prime</Link>
					<Link href="/listings/frontend/power-rangers">Power Rangers</Link>
					<Link href="/listings/frontend/witcher">Witcher</Link>
					<Link href="/listings/frontend/frankenstein">Frankenstein</Link>
					<Link href="/listings/frontend/pans">Pan's Labyrinth</Link>
					<Link href="/listings/frontend/terminator">Terminator</Link>
					<Link href="/listings/frontend/bond-james">James Bond</Link>
					<Link href="/listings/frontend/doc-brown">Doc Brown</Link>
					<Link href="/listings/frontend/buffy">Buffy the Vampire Slayer</Link>
					<Link href="/listings/frontend/toretto">Dominic Toretto</Link>
					<Link href="/listings/frontend/addams-family">Addams Family</Link>
					<Link href="/listings/frontend/ron-swanson">Ron Swanson</Link>
					<Link href="/listings/frontend/loki">Loki</Link>
					<Link href="/listings/frontend/raymond-holt">Captain Holt</Link>
					<Link href="/listings/frontend/redwall">Redwall Abbey</Link>
					<Link href="/listings/frontend/jack-sparrow">Jack Sparrow</Link>
					<Link href="/listings/frontend/king-arthur">King Arthur</Link>
					<Link href="/listings/frontend/jumanji">Jumanji</Link>
					<Link href="/listings/frontend/jafar">Jafar</Link>
					<Link href="/listings/frontend/monsters-inc">Monsters, Inc.</Link>
					<Link href="/listings/frontend/ip-man">Ip Man</Link>
					<Link href="/listings/frontend/willy-wonka">Willy Wonka</Link>
					<Link href="/listings/frontend/dark-helmet">Dark Helmet</Link>
					<Link href="/listings/frontend/liu-kang">Liu Kang</Link>
					<Link href="/listings/frontend/shrek">Shrek</Link>
					<Link href="/listings/frontend/all-might">All Might</Link>
					<Link href="/listings/frontend/tmnt">
						Teenage Mutant Ninja Turtles
					</Link>
					<Link href="/listings/frontend/grinch">Grinch</Link>
					<Link href="/listings/frontend/alice">Alice in Wonderland</Link>
					<Link href="/listings/frontend/tune-squad">Space Jam</Link>
					<Link href="/listings/frontend/blade">Blade</Link>
					<Link href="/listings/frontend/robin-hood">Robin Hood</Link>
					<Link href="/listings/frontend/enterprise">Starship Enterprise</Link>
					<Link href="/listings/frontend/fantastic-four">Fantastic Four</Link>
					<Link href="/listings/frontend/mib">Men in Black</Link>
					<Link href="/listings/frontend/ghostbusters">Ghostbusters</Link>
					<Link href="/listings/frontend/dr-dolittle">Doctor Dolittle</Link>
					<Link href="/listings/frontend/wolfman">Wolfman</Link>
					<Link href="/listings/frontend/umbrella">Umbrella Academy</Link>
					<Link href="/listings/frontend/pennywise">Pennywise</Link>
					<Link href="/listings/frontend/green-arrow">Green Arrow</Link>
					<Link href="/listings/frontend/sailor-moon">Sailor Moon</Link>
					<Link href="/listings/frontend/lucifer">Lucifer</Link>
					<Link href="/listings/frontend/han-solo">Han Solo</Link>
					<Link href="/listings/frontend/sheldon">Sheldon Cooper</Link>
					<Link href="/listings/frontend/mogwai">Mogwai</Link>
					<Link href="/listings/frontend/rocky">Rocky</Link>
					<Link href="/listings/frontend/thanos">Thanos</Link>
					<Link href="/listings/frontend/john-mcclane">John McClane</Link>
					<Link href="/listings/frontend/freddy-kruger">Freddy Kruger</Link>
					<Link href="/listings/frontend/thundercats">Thundercats</Link>
					<Link href="/listings/frontend/samus">Samus Aran</Link>
					<Link href="/listings/frontend/tom-nook">Tom Nook</Link>
					<Link href="/listings/frontend/phileas">Phileas Fogg</Link>
					<Link href="/listings/frontend/twilight-zone">Twilight Zone</Link>
					<Link href="/listings/frontend/winnie">Winnie the Pooh</Link>
					<Link href="/listings/frontend/dexters-lab">Dexter's Laboratory</Link>
					<Link href="/listings/frontend/krypton">Krypton</Link>
				</section>
			</main>
			<footer>
				<p>
					Imaginary Opportunies was built by{" "}
					<a
						className="footer-link"
						href="https://www.kyleshook.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Kyle Shook
					</a>{" "}
					while experimenting with ChatGPT. It is{" "}
					<a
						className="footer-link"
						href="https://github.com/KyleShook/imaginary-opportunities"
						target="_blank"
						rel="noopener noreferrer"
					>
						open sourced
					</a>{" "}
					and a great project for developers of all skill levels to contribute
					to.
				</p>
			</footer>
		</>
	);
}
