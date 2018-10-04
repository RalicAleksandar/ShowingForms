export class Form {
	id: string;
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
		this.label = '';
		this.required = false;
	}
}

export interface SubmittedFormSummary {
	id?: string;
	formName?: string;
	submittedBy: string;
	submittedAt?: Date;
}

export interface SubmittedForm extends SubmittedFormSummary {
	formId: string;
	values: string[];
}

export enum ItemType {
	INPUT,
	CHECKBOX
}
