import Link from "next/link";

const Listing = () => {
  return (
    <section className="listing">
      <Link href="/">Return Home</Link>
      <p>
        <strong>Frontend Developer (Entry-Level)</strong>
      </p>
      <p>
        Are you ready to join the Elite Four and take on the toughest coding
        challenges in the land? We're looking for a frontend developer who's up
        for the challenge and can defeat all four members of our team in a coding
        battle to earn their spot on our team.
      </p>
      <p>
        As a member of the Elite Four, you'll be working on some of the most
        high-profile projects in the industry, building sleek and intuitive user
        interfaces that will wow our clients and users alike. You'll need to be
        skilled in HTML, CSS, and JavaScript, and have a strong understanding of
        responsive design and cross-browser compatibility.
      </p>
      <p>
        But it's not all work and no play - we like to have a little fun at the
        Elite Four. Expect regular Pok&eacute;mon battles (with code, of course),
        epic coding competitions, and plenty of snacks and drinks to keep you
        fueled up for the fight.
      </p>
      <p>
        Think you have what it takes to join the Elite Four? Show us your skills
        and take on our team in a coding battle to earn your spot on our team.
        May the best developer win!
      </p>
    </section>
  );
};

export default Listing;
