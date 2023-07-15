import React, { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ICard } from '../../core/interface/card';
import ImageNotAvailable from '../../assets/image_not_available.png';

interface CardModalProps {
	show: boolean;
	setShow: (bool: boolean) => void;
	card: ICard;
}

const CardModal: React.FC<CardModalProps> = ({ show, setShow, card }) => {

	const src = card.image_status !== 'missing' && card.image_uris?.normal ? card.image_uris.normal : ImageNotAvailable;
	const cancelButtonRef = useRef(null);

	return (
		<Transition.Root show={show} as={Fragment}>
			<Dialog as='div' className='relative z-10' initialFocus={cancelButtonRef} onClose={setShow}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						>
							<Dialog.Panel
								className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg modal_blur'>
								<div className='flex'>
									<div className='flex-1'>
										<img src={src} alt='' />
									</div>
									<div
										className='h-auto flex-1 bg-white rounded-r-2xl pl-4 flex flex-col justify-between'>
										<div>
											<div className='px-4 pt-4 sm:px-0'>
												<h3 className='text-base font-semibold leading-7 text-gray-900'>Card
													Information</h3>
											</div>
											<div className='mt-2 border-t border-gray-100'>
												<dl className='divide-y divide-gray-100'>
													<div className='px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
														<dt className='text-sm font-medium leading-6 text-gray-900'>Name</dt>
														<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{card.name}</dd>
													</div>
													<div className='px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
														<dt className='text-sm font-medium leading-6 text-gray-900'>Set
															name
														</dt>
														<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{card.set_name}</dd>
													</div>
													<div className='px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
														<dt className='text-sm font-medium leading-6 text-gray-900'>Number</dt>
														<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{card.cardmarket_id}</dd>
													</div>
													<div className='px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
														<dt className='text-sm font-medium leading-6 text-gray-900'>Rarity</dt>
														<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{card.rarity}</dd>
													</div>
													<div className='px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
														<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{card.flavor_text}</dd>
													</div>
												</dl>
											</div>
										</div>
										<div className='bg-gray-50 px-4 mt-6 sm:flex sm:flex-row-reverse sm:px-6'>
											<button
												type='button'
												className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
												onClick={() => setShow(false)}
												ref={cancelButtonRef}
											>
												Close
											</button>
										</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default CardModal;
