module.exports = {
	reactStrictMode: true,
	images: { domains: ['localhost'] },
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
	},
};
