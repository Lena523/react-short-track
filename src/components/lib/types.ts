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

export type SearchBarProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
