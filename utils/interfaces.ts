export interface ValidationStrategy {
  validate(value: string | number | readonly string[] | undefined): boolean;
  message: string;
}
