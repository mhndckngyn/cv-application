export type Field<T> = {
  label: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  attribute: keyof T;
  placeholder?: string;
};
