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

export interface SubmittedFormSummary {
	id: string;
	formName: string;
	submittedBy: string;
	submittedAt: Date;
}

export interface SubmittedForm extends SubmittedFormSummary {
	items: ItemValue[];
}

export interface ItemValue {
	type: ItemType;
	name: string;
	value: string | boolean;
}

export enum ItemType {
	INPUT,
	CHECKBOX
}
