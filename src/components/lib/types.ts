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
