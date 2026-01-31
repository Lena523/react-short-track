export type ButtonElementProps = {
  action: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
};

export type TextElementProps = {
  text: string;
};

export type InputElementProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  isDisabled: boolean;
  placeholder: string;
};

export interface BasicChildrenProps {
  children: React.ReactNode;
}

export type CourseCardProps = {
  id?: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
};

export type Authors = {
  id: string;
  name: string;
};

export type SearchBarProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
