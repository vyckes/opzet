export const ERROR_CODES = {
  required: "required",
  type: "type",
  unique: "unique",
  string: {
    format: "string.format",
    email: "string.email",
    url: "string.url",
    uuid: "string.uuid",
    iban: "string.iban",
    enum: "string.enum",
    min: "string.min",
    max: "string.max",
  },
  number: {
    min: "number.min",
    max: "number.max",
  },
  array: {
    max: "array.max",
    min: "array.min",
  },
  datetime: {
    min: "datetime.min",
    max: "datetime.max",
  },
};
