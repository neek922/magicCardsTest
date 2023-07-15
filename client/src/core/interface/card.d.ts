export interface ICardResponseData {
	object: string;
	total_cards: number;
	has_more: boolean;
	data: ICard[];
	isNoteFound?: boolean;
}


export interface ICard {
	arena_id?: number | null;
	id: string;
	lang: string;
	mtgo_id?: number | null;
	mtgo_foil_id?: number | null;
	multiverse_ids?: number[] | null;
	tcgplayer_id?: number | null;
	tcgplayer_etched_id?: number | null;
	cardmarket_id?: number | null;
	object: string;
	oracle_id: string;
	prints_search_uri: string;
	rulings_uri: string;
	scryfall_uri: string;
	uri: string;

	// Gameplay Fields
	all_parts?: IRelatedCard[];
	card_faces?: ICardFace[];
	cmc: number;
	color_identity: string[];
	color_indicator?: string[] | null;
	colors?: string[] | null;
	edhrec_rank?: number | null;
	hand_modifier?: string | null;
	keywords: string[];
	layout: string;
	legalities: Record<string, string>;
	life_modifier?: string | null;
	loyalty?: string | null;
	mana_cost?: string | null;
	name: string;
	oracle_text?: string | null;
	oversized: boolean;
	penny_rank?: number | null;
	power?: string | null;
	produced_mana?: string[] | null;
	reserved: boolean;
	toughness?: string | null;
	type_line: string;

	// Print Fields
	artist?: string | null;
	attraction_lights?: any[] | null;
	booster: boolean;
	border_color: string;
	card_back_id: string;
	collector_number: string;
	content_warning?: boolean | null;
	digital: boolean;
	finishes: string[];
	flavor_name?: string | null;
	flavor_text?: string | null;
	frame_effects?: string[] | null;
	frame: string;
	full_art: boolean;
	games: string[];
	highres_image: boolean;
	illustration_id?: string | null;
	image_status: string;
	image_uris?: ICardImage | null;
	prices: Record<string, string>;
	printed_name?: string | null;
	printed_text?: string | null;
	printed_type_line?: string | null;
	promo: boolean;
	promo_types?: string[] | null;
	purchase_uris: Record<string, string>;
	rarity: string;
	related_uris: Record<string, string>;
	released_at: string;
	reprint: boolean;
	scryfall_set_uri: string;
	set_name: string;
	set_search_uri: string;
	set_type: string;
	set_uri: string;
	set: string;
	set_id: string;
	story_spotlight: boolean;
	textless: boolean;
	variation: boolean;
	variation_of?: string | null;
	security_stamp?: string | null;
	watermark?: string | null;
	preview?: {
		previewed_at: string;
		source_uri: string;
		source: string;
	};
}

interface ICardFace {
	artist?: string | null;
	cmc?: number | null;
	color_indicator?: string[] | null;
	colors?: string[] | null;
	flavor_text?: string | null;
	illustration_id?: string | null;
	image_uris?: Record<string, string> | null;
	layout?: string | null;
	loyalty?: string | null;
	mana_cost: string;
	name: string;
	object: string;
	oracle_id?: string | null;
	oracle_text?: string | null;
	power?: string | null;
	printed_name?: string | null;
	printed_text?: string | null;
	printed_type_line?: string | null;
	toughness?: string | null;
	type_line: string;
	watermark?: string | null;
}

interface IRelatedCard {
	id: string;
	object: string;
	component: string;
	name: string;
	type_line: string;
	uri: string;
}

interface ICardImage {
	art_crop: string;
	border_crop: string;
	large: string;
	normal: string;
	png: string;
	small: string;
}
