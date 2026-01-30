export type ButtonElementProps = {
  action: string;
  onClick: () => void;
  isDisabled: boolean;
};

export type TextElementProps = {
  text: string;
};

export type InputElementProps = {
  onChange: () => void;
  isDisabled: boolean;
  placeholder: string;
};
