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
				<meta
					property="og:title"
					content="Welcome to Imaginary Opportunities"
				/>
				<meta
					property="og:description"
					content="Find exciting and unique job openings with your favorite fictional characters."
				/>
				<meta
					property="og:image"
					content="imaginary-opportunities.vercel.app/images/metaImage.png"
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:domain"
					content="imaginary-opportunities.vercel.app"
				/>
				<meta
					property="twitter:url"
					content="https://imaginary-opportunities.vercel.app/"
				/>
				<meta
					name="twitter:title"
					content="Welcome to Imaginary Opportunities"
				/>
				<meta
					name="twitter:description"
					content="Find exciting and unique job openings with your favorite fictional characters."
				/>
				<meta
					name="twitter:image"
					content="imaginary-opportunities.vercel.app/images/metaImage.png"
				></meta>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
