export type CourseProps = {
  id: string;
  user: string;
  title: string;
  description: string;
  creationDate: string;
  duration: string;
  authors: string[];
};

export type CourseInfoCardProps = {
  course: CourseProps;
};

export type Authors = {
  id: string;
  name: string;
};

export type Inputs = {
  user?: string;
  password?: string;
  title?: string;
  description?: string;
  duration?: string;
  author?: string;
};

export type CourseFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type CourseAuthorsListProps = {
  courseAuthors: string[];
  onDeleteActiveAuthor: (item: string) => void;
};

export type AuthorsActiveListProps = {
  authors: string[];
  onAddCourseAuthor: (item: string) => void;
};

export type CardCourseHandler = (id: string) => void;

export type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: string;
  authors: string[];
  onShowCourse: CardCourseHandler;
  onDeleteCourse: CardCourseHandler;
  onEditCourse?: CardCourseHandler;
};
