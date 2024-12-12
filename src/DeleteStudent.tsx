import React from 'react';
import { StudentClass } from './types/Student';

type DeleteStudentProps = {
  student: StudentClass;
  onDelete: (index_nr: number) => void;
};

export default function DeleteStudent({ student, onDelete }: DeleteStudentProps): React.ReactElement {
  return (
    <button
      onClick={() => {
        if (window.confirm(`U sure you want delete ${student.Name} ${student.Surname}?`)) {
          onDelete(student.Index_nr);
        }
      }}
    >
      Delete
    </button>
  );
}
