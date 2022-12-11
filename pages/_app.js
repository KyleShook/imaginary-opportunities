import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Your dream job awaits</title>

				<meta
					property="og:url"
					content="https://imaginary-opportunities.vercel.app/"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Your dream job awaits." />
				<meta
					property="og:description"
					content="Welcome to Imaginary Opportunities, the job board where you can find exciting and unique job openings with your favorite fictional characters."
				/>
				<meta property="og:image" content="../public/images/meta-image.png" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:domain"
					content="imaginary-opportunities.vercel.app"
				/>
				<meta
					property="twitter:url"
					content="https://imaginary-opportunities.vercel.app/"
				/>
				<meta name="twitter:title" content="Your dream job awaits." />
				<meta
					name="twitter:description"
					content="Welcome to Imaginary Opportunities, the job board where you can find exciting and unique job openings with your favorite fictional characters."
				/>
				<meta
					name="twitter:image"
					content="../public/images/meta-image.png"
				></meta>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
