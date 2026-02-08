import { ReactNode } from 'react';
import { Inputs } from './domain';

export type AuthHandler = ({ ...data }: Inputs) => void;

export type ButtonElementProps = {
  action: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
};

export type InputElementProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  isDisabled?: boolean;
  placeholder?: string;
  label?: string;
  type?: string;
  name?: string;
};

export interface LoginProps {
  onLogin: AuthHandler;
  onLogout: () => void;
}

export type TextElementProps = {
  text: string;
};

export type HeaderProps = Pick<LoginProps, 'onLogout'> & {
  isVisible: boolean;
  user: string;
};

export type SearchBarProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export interface BasicChildrenProps {
  children: ReactNode;
}

export type ErrorMessageProps = {
  textMessage: string;
};
