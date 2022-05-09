const links = [
	{
		link: '/works',
		title: 'Works',
	},
	{
		link: '/',
		title: 'About',
	},
	{
		link: 'https://github.com/sushkovi',
		title: 'GitHub',
	},
];

export default function handler(req, res) {
	res.status(200).json(links);
}
