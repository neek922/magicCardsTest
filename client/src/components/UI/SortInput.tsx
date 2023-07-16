import React, {Fragment, useState} from 'react';
import {Menu, Transition} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import {ISortItem} from '../../core/interface/sort';
import {Tooltip} from 'react-tooltip';

type SortInputProps = {
	onSort: (value: string) => void;
	title: string,
	sortOptions: ISortItem[]
};


const SortInput: React.FC<SortInputProps> = ({onSort, title, sortOptions}) => {
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const handlerClick = (bool: boolean) => {
		setIsFocused(bool);
	}

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button
					onClick={() => handlerClick(true)}
					className={`inline-flex items-center sort_btn justify-center gap-x-1.5 border p-2 w-32 text-sm text-gray-400 bg-gray-50 rounded-lg focus:outline-none ${isFocused ? 'border-2 border-orange-500' : ''}`}>
					{title}
					<ChevronDownIcon className="-mr-1 h-5 w-5 text-orange-500" aria-hidden="true"/>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items
					onBlur={() => handlerClick(false)}
					className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						{sortOptions.map((item) => (
							<Menu.Item key={item.value}>
								<span
									data-tooltip-id={item.value}
									data-tooltip-content={item.description}
									data-tooltip-place="top"
									onClick={() => onSort(item.value)}
									className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
									{item.title}
								</span>

							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
			{sortOptions.map((item) => (
				<Tooltip key={item.value} id={item.value} className="z-50"/>
			))}
		</Menu>
	);
};

export default SortInput;
