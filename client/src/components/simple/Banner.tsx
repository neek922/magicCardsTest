import React from 'react';

type BannerProps = {
	text: string
};

const Banner: React.FC<BannerProps> = ({text}) => {
	return (
		<div className="relative text-gray-600 text-7xl text-center">
			{text}
		</div>
	);
};

export default Banner;
