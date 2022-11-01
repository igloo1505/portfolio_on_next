import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<meta name="application-name" content="iglooDevelopment" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="iglooDevelopment" />
				<meta
					name="description"
					content="Milwaukee based web and iOS developer building awesome, modern websites and mobile apps since 2015. A ton of React, Python for data, and a wee bit of Swift when I'm feeling squirrely."
				/>
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-TileColor" content="#2B5797" />
				<meta name="msapplication-tap-highlight" content="no" />
				<meta name="theme-color" content="#018eeb" />
				<link rel="apple-touch-icon" sizes="152x152" href="/icons/152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/icons/180.png" />
				<link rel="apple-touch-icon" sizes="167x167" href="/icons/167.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/icons/32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/icons/16.png" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="shortcut icon" href="/icons/favicon.ico" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="iglooDevelopment" />
				<meta
					property="og:description"
					content="Milwaukee based web and iOS developer."
				/>
				<meta property="og:site_name" content="iglooDevelopment" />
				<meta property="og:url" content="https://www.iglooDevelopment.dev" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
