import React from 'react'

type Props = {
	number: string;
}

function Number({ number }: Props) {
	const num = parseInt(number);
	var si = [
		{ value: 1, symbol: '' },
		{ value: 1e3, symbol: 'k' },
		{ value: 1e6, symbol: 'M' },
		{ value: 1e9, symbol: 'G' },
		{ value: 1e12, symbol: 'T' },
		{ value: 1e15, symbol: 'P' },
		{ value: 1e18, symbol: 'E' },
	];
	var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	var i;
	for (i = si.length - 1; i > 0; i--) {
		if (num >= si[i].value) {
			break;
		}
	}
	return <React.Fragment>{(num / si[i].value).toFixed(1).replace(rx, '$1') + si[i].symbol}</React.Fragment>
}

export default Number
