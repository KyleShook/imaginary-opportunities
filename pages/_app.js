import "../styles/globals.css";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextSeo
				title={"Welcome to Imaginary Opportunities"}
				titleTemplate={"Welcome to Imaginary Opportunities"}
				defaultTitle={"Welcome to Imaginary Opportunities"}
				description="Find exciting and unique job openings with your favorite fictional characters."
				canonical="https://imaginary-opportunities.vercel.app/"
				openGraph={{
					url: "https://imaginary-opportunities.vercel.app/",
					title: "Welcome to Imaginary Opportunities",
					description:
						"Find exciting and unique job openings with your favorite fictional characters.",
					images: [
						{
							url: "https://imaginary-opportunities.vercel.app/images/metaImage.png",
							width: 1200,
							height: 630,
						},
					],
				}}
				twitter={{
					cardType: "summary_large_image",
				}}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
