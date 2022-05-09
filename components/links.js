import axios from 'axios';

export const getStaticProps = async () => {
	const links = await axios.get(`${API_URL}/links`).then(({ data }) => data);

	return {
		props: {
			links,
		},
		revalidate: 60,
	};
};
