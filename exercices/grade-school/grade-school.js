//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  #students = [];
  #grades = [];
  roster() {
    return this.#students;
  }

  add(student, grade) {
    if (this.#students.includes(student)){
      return false;
    }
    else{
      this.#students.push(student);
      this.#grades.push(grade)
      return true;
    }
  }

  grade(grade) {
    let index = this.#grades.indexOf(grade);
    return this.#students[index];
  }
}
