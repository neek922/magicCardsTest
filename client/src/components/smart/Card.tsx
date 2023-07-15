import React, { useState } from 'react';
import { ICard } from '../../core/interface/card';
import ImageNotAvailable from '../../assets/image_not_available.png';
import CardModal from './CardModal';

interface CardProps {
	card: ICard;
}

const Card: React.FC<CardProps> = ({ card }) => {
	const [show, setShow] = useState<boolean>(false);
	const src = card.image_status !== 'missing' && card.image_uris?.normal ? card.image_uris.png : ImageNotAvailable;

	return (
		<>
			<div className='w-64 hover:scale-150 flex cursor-pointer' onClick={() => setShow(true)}>
				<img src={src} alt='' />
			</div>
			{show && <CardModal show={show} setShow={setShow} card={card} />}
		</>
	);
};

export default Card;
