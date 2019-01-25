import { useState, useEffect } from 'react';

type Options = {
	method: 'GET';
};

export function useAPIRequest(endpoint: string, options?: Options) {
	const [data, updateData] = useState(undefined);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch(endpoint, options)
			.then(response => {
				return response.json();
			})
			.then(response => {
				setLoading(false);
				updateData(response.items);
			});
	}, []);

	return {
		data,
		isLoading,
	};
}
