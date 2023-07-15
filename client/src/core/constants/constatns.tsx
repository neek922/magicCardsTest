import { ISortItem } from '../interface/sort';

export const LIMIT_CARDS_ON_PAGE: number = 175;
export const SORT_TYPES: ISortItem[] = [
	{
		title: 'Name',
		description: 'Sort cards by name, A → Z',
		value: 'name',
	},
	{
		title: 'Set',
		description: 'Sort cards by their set and collector number: AAA/#1 → ZZZ/#999',
		value: 'set',
	},
	{
		title: 'Released',
		description: 'Sort cards by their release date: Newest → Oldest',
		value: 'released',
	},
	{
		title: 'Rarity',
		description: 'Sort cards by their rarity: Common → Mythic',
		value: 'rarity',
	},
	{
		title: 'Color',
		description: 'Sort cards by their color and color identity: WUBRG → multicolor → colorless',
		value: 'color',
	},
	{
		title: 'U.S. Dollar',
		description: 'Sort cards by their lowest known U.S. Dollar price: 0.01 → highest, null last',
		value: 'usd',
	},
	{
		title: 'TIX',
		description: 'Sort cards by their lowest known TIX price: 0.01 → highest, null last',
		value: 'tix',
	},
	{
		title: 'Euro',
		description: 'Sort cards by their lowest known Euro price: 0.01 → highest, null last',
		value: 'eur',
	},
	{
		title: 'Mana value',
		description: 'Sort cards by their mana value: 0 → highest',
		value: 'cmc',
	},
	{
		title: 'Power',
		description: 'Sort cards by their power: null → highest',
		value: 'power',
	},
	{
		title: 'Toughness',
		description: 'Sort cards by their toughness: null → highest',
		value: 'toughness',
	},
	{
		title: 'EDHREC',
		description: 'Sort cards by their EDHREC ranking: lowest → highest',
		value: 'edhrec',
	},
	{
		title: 'Penny',
		description: 'Sort cards by their Penny Dreadful ranking: lowest → highest',
		value: 'penny',
	},
	{
		title: 'Artist',
		description: 'Sort cards by their front-side artist name: A → Z',
		value: 'artist',
	},
	{
		title: 'Review',
		description: 'Sort cards how podcasts review sets, usually color & CMC, lowest → highest, with Booster Fun cards at the end',
		value: 'review',
	},
];
export const SORT_DIR: ISortItem[] = [
	{
		title: 'Auto',
		description: 'Automatically choose the most inuitive direction to sort',
		value: 'auto',
	},
	{
		title: 'ASC',
		description: 'Sort ascending (the direction of the arrows in the previous table)',
		value: 'asc',
	},
	{
		title: 'DESC',
		description: 'Sort descending (flip the direction of the arrows in the previous table)',
		value: 'desc',
	},
];
