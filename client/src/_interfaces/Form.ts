import { MouseEventHandler } from "react";

export interface IForm {
  children: JSX.Element;
  open: boolean;
  onOpen(): void;
  onClose(): void;
  submitHandler(): void;
  title: string;
  buttonText: string;
  isValidated: boolean;
  submitButtonText?: string;
}
