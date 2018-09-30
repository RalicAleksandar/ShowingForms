export class Form {
	name: string;
	items: FormItem[];

	constructor() {
		this.name = '';
		this.items = [];
	}
}

export class FormItem {
	type: ItemType;
	label: string;
	required: boolean;

	constructor(type: ItemType) {
		this.type = type;
	}
}

export enum ItemType {
	INPUT,
	CHECKBOX
}
