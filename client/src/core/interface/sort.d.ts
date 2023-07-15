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
