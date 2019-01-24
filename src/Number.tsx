import React from 'react';

const Number = ({ number }: { number: string }) => {
	return <>{parseInt(number).toLocaleString()}</>;
};

export default Number;
