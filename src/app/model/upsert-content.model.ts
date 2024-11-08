export class HasId {
  id: Number;
}

export class UpsertField {
  name: string;
  label: string;
  type: number;
  required: boolean;
  value: string;
  options: SelectOption[];
  errors: string[];

  constructor(
    name: string,
    label: string,
    type: number = 1,
    required: boolean = false,
    value: string = null,
    options: SelectOption[] = [],
    errors: string[] = []
  ) {
    this.name = name;
    this.label = label;
    this.type = type;
    this.required = required;
    this.value = value;
    this.options = options;
    this.errors = errors;
  }
}

export class SelectOption {
  constructor(value: String = null, text: String = 'x') {
    this.value = value;
    this.text = text;
  }

  value: String;
  text: String;
}

