export interface ISortTypes {
	name: ISortItem,
	set: ISortItem,
	released: ISortItem,
	rarity: ISortItem,
	color: ISortItem,
	usd: ISortItem,
	tix: ISortItem,
	eur: ISortItem,
	cmc: ISortItem,
	power: ISortItem,
	toughness: ISortItem,
	edhrec: ISortItem,
	penny: ISortItem,
	artist: ISortItem,
	review: ISortItem
}

export interface ISortDir {
	auto: ISortItem,
	asc: ISortItem,
	desc: ISortItem
}

export interface ISortItem {
	title: string,
	description: string,
	value: string
}
export type SortTypes = 'name' | 'set' | 'released' | 'rarity' | 'color' | 'usd' | 'tix' | 'eur' | 'cmc' | 'power' | 'toughness' | 'edhrec' | 'penny' | 'artist' | 'review' | 'auto' | 'asc' | 'desc';
export type SortType = 'name' | 'set' | 'released' | 'rarity' | 'color' | 'usd' | 'tix' | 'eur' | 'cmc' | 'power' | 'toughness' | 'edhrec' | 'penny' | 'artist' | 'review' ;
export type DirType = 'auto' | 'asc' | 'desc';
