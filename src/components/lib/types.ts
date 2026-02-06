import { ReactNode } from 'react';

export type ButtonElementProps = {
  action: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | AuthHandler;
  isDisabled: boolean;
};

export type TextElementProps = {
  text: string;
};

export type InputElementProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  isDisabled?: boolean;
  placeholder?: string;
  label?: string;
  type?: string;
  name?: string;
};

export type CardCourseHandler = (id: string) => void;

export type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
  onShowCourse: CardCourseHandler;
  onDeleteCourse: CardCourseHandler;
  onEditCourse?: CardCourseHandler;
};

export type MockedListProps = Omit<
  CourseCardProps,
  'onShowCourse' | 'onDeleteCourse' | 'onEditCourse'
>;

export type CourseInfoCardProps = {
  course: MockedListProps;
};

export type Authors = {
  id: string;
  name: string;
};

export interface BasicChildrenProps {
  children: ReactNode;
}

export type SearchBarProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export type Inputs = {
  user?: string;
  password?: string;
  title?: string;
  description?: string;
  duration?: string;
  author?: string;
};

export type AuthHandler = ({ ...data }: Inputs) => void;

export interface LoginProps {
  onLogin: AuthHandler;
  onLogout: AuthHandler;
}

export type ErrorMessageProps = {
  textMessage: string;
};

export type CourseFormModalprops = {
  isOpen: boolean;
  onClose: () => void;
};
