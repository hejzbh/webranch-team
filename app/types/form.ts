export interface FormInput {
  name: string;
  placeholder?: string;
  label?: string;
  type: "input" | "select" | "checkbox" | "textarea";
  inputType?: "text" | "email" | "number" | "password";
  required?: boolean;
  Icon?: any;
}
