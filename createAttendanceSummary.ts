// setup the types of variables that we're using

interface Student {
  name: string,
  class: string,
  attended: number
}

interface ClassAttendanceSummary {
  className: string,
  total: number,
  average: number
}

interface StudentData {
  students: Student[]
}

/**
 *  @const studentData
 *  @description provided mock data. An Object, with an array named "students" within.
 */

const studentData = {
  students: [
    {
      name: "Lulu Gearside",
      class: "art",
      attended: 35,
    },
    {
      name: "Matthew Milham",
      class: "art",
      attended: 11,
    },
    {
      name: "Dany Dufner",
      class: "biology",
      attended: 12,
    },
    {
      name: "Jeremy Doyle",
      class: "biology",
      attended: 3,
    },
    {
      name: "Tim O'Connor",
      class: "biology",
      attended: 10,
    },
    {
      name: "Charlie Wang",
      class: "french",
      attended: 12,
    },
  ] as Student[] ,
} as StudentData;

/**
 * @function createAttendanceSummary
 * @param studentData
 * @description add the total and average values to the classes object.
 * @return classAttendance
 */

function createAttendanceSummary(studentData : StudentData) {
  
  /**
   * @const classNames - 
   * here, we use a set of strings to dedupe class names. Fancy!
   * */

  const classNames = new Set<string>();

  /**
   * @const classAttendanceSummary
   * @description 
   * the output object, an object with the names of classes as a key 
   * and their total + average attendance as properties.
   **/

  const classAttendanceSummary = {} as ClassAttendanceSummary ;

  // loop the student data and extract the names of the classes
  studentData.students.forEach((student) => {
    classNames.add(student.class);
  });

  // iterate over each className in classNames
  classNames.forEach((className : string) => {

    // calculate the totals as a new var
    const calculatedTotal = studentData.students
      .filter((student : Student) => student.class === className)
      .reduce((sum, student : Student ) => sum + student.attended, 0);
      // ^ sum up the attendance

    // count the amount of classes attended
    const countedClasses = studentData.students.filter(
      (student : Student ) => student.class === className
    ).length; // the count of classes attended

    // calculate the total attendance for the current class. we use the same var as above
    const total = calculatedTotal;
    const average = Math.round(calculatedTotal / countedClasses );
    // ^ average of total divided by count. naturally, we need to round the average down to avoid decimals.

    // return the class data
    classAttendanceSummary[className] = {
      total,
      average,
    };
    
  });

  // log out our data for testing. tables are fancier than logs.
  console.table(classAttendanceSummary);

  // return the classes object
  return classAttendanceSummary;
}

// run the functions
createAttendanceSummary(studentData);