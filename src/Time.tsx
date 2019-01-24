import React from 'react';

const Time = ({ time }: { time: string }) => {
	const formattedTime = time.replace(/PT|S/gi, '').replace(/M/g, ':');
	const minutes = formattedTime.split(':')[0];
	let seconds = formattedTime.split(':')[1];
	if (seconds && seconds.length === 1) {
		seconds = `0${seconds}`;
	} else if (!seconds) {
		seconds = '00';
	}
	return <>{`${minutes}:${seconds}`}</>;
};

export default Time;
