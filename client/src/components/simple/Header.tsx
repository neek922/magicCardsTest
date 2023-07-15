import React from 'react';
import logo from '../../assets/small_logo_flat_design_9721338312.png';


const Header: React.FC = () => {
	return (
		<header className='absolute inset-x-0 top-0 z-50'>
			<nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
				<div className='flex lg:flex-1'>
					<a href='https://tcgmachines.com/' className='-m-1.5 p-1.5'>
						<img
							className='h-12 w-auto'
							src={logo}
							alt=''
						/>
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Header;
