# Imaginary Opportunities

Welcome to Imaginary Opportunities, the job board where you can find exciting and unique job openings with your favorite fictional characters. From mythical creatures and enchanted forests to futuristic cities and distant galaxies, our listings offer a wide range of opportunities for those looking to pursue their dream careers in the world of imagination.

Whether you're a skilled wizard seeking a position in a magical kingdom, a fearless adventurer looking for your next great quest, or a creative problem-solver seeking to make a difference in the world of make-believe, Imaginary Opportunities has something for you. Explore our listings today and take the first step towards your dream job in a fantastical world of wonder and adventure.

We also have opportunities for those who prefer to tread the path of darkness, with listings for villainous roles and wicked schemes.

## Contribution Guidelines: WIP

### First, a few rules:

1. Please keep the tone of your job post lighthearted and funny.
2. No duplicates. Please check the list before creating your pull request.
3. One job post per pull request.

### How the job listings were created:

This project utilized OpenAI and ChatGPT to generate the content for each job listing separately. We hope you will try this method also, it's very easy! (We'll give you a quick walkthrough too) However, if absolutely feel led to write the job post yourself, feel free.

**Steps to create a new job listing:**

1. Visit [ChatGPT](https://chat.openai.com/chat)
2. Create an account
3. If you're not forwarded to ChatGPT, revisit [ChatGPT](https://chat.openai.com/chat)
4. In the input field, ask it to write an "entry-level frontend developer job listing where you'll be working for [Your job goes here]" (Tip: Add "Make it funny" for a more humorous tone)
5. Copy a response that you light and paste it into [HTML Cleaner](https://html-cleaner.com/)
6. Now you have your job listing code and are ready to begin contributing to the project.

**Steps to contribute your new job listing:**

1. Fork the project from `https://github.com/KyleShook/imaginary-opportunities`

```
git clone https://github.com/KyleShook/imaginary-opportunities.git
```

2.
3. Create a new page file in the frontend folder: `pages\listings\frontend\new-file.js`
   - The name of the file will also be part of the url path for the job listing.
   - There is an example page file in: `pages\listings\frontend\example\example.js`
4. Copy the example file contents or add this code to your new page file:

```js
import Link from "next/link";

const Listing = () => {
	return (
		<section className="listing">
			<Link href="/">Return Home</Link>
			<p>
				<strong>Frontend Developer (Entry-Level)</strong>
			</p>
			{/* Your job listing code from HTML Cleaner goes here */}
		</section>
	);
};

export default Listing;
```

5. Add a new `Link` to the index.js file. `pages\index.js`
   - You can add the `Link` anywhere in the list. It will be automatically alphabetized.

```js
<Link href="/listings/frontend/yourFileName">Awesome Job</Link>
```

6. Check that your new job listing appears on the homepage and the link works correctly.
