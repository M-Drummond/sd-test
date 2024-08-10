/** 
 *  Procided mock data. An Object, with an array named "students" within.
 *  @interface 
*/
const studentData = {
  "students": [
    {
      "name": "Lulu Gearside",
      "class": "art",
      "attended": 35
    },
    {
      "name": "Matthew Milham",
      "class": "art",
      "attended": 11
    },
    {
      "name": "Dany Dufner",
      "class": "biology",
      "attended": 12
    },
    {
      "name": "Jeremy Doyle",
      "class": "biology",
      "attended": 3
    },
    {
      "name": "Tim O'Connor",
      "class": "biology",
      "attended": 10
    },
    {
      "name": "Charlie Wang",
      "class": "french",
      "attended": 12
    }
  ]
}
 
/**
 * @const classNames - We use a set to dedupe class names. Fancy! 
 * @interface string[] 
 * */

const classNames  = new Set() 

/** 
 * the eventually outputted object 
* @example {
*  "art": {
*    "total": 46,
*    "average": 23,
*  },
*  "biology": {
*    "total": 25,
*    "average": 8,
*  },
*  "french": {
*    "total": 12,
*    "average": 12,
*  },
* }
**/

const classAttendance = {}

/** 
*
* @function createAttendanceSummary() - read the data and create an attendanceSummary 
* go through each student and add the name of a class to the `classNames` object.
* @returns @object
* 
*/

function createAttendanceSummary( studentData ) {

  studentData.students.forEach(student => {
    classNames.add( student.class )
  });
}
  
/** 
 * @function populateAttendanceSummary 
 * @param studentData
 * @description add the total and average values to the classes object.
 * @return classAttendance
 */

function populateAttendanceSummary(studentData) {
  // Iterate over each className in classNames
  classNames.forEach(className => {
    
    // calculate the totals as a new var
    const calculatedTotal = studentData.students
    .filter(student => student.class === className)  // Filter students for the current class
    .reduce((sum, student) => sum + student.attended, 0);  // Sum up the attendance

    // calculate the average attendance
    const countedClasses = studentData.students 
    .filter(student => student.class === className ).length // the count of classes attended

    // calculate the total attendance for the current class. we use the same var as above
    const total = calculatedTotal 
    const average =  Math.round( calculatedTotal  / countedClasses  ) // we need to round the average down to avoid decimals.
    
    // return the class data 
    classAttendance[className] = {
      total,
      average 
    };
  });


  // log out our data for testing

  console.table ( classAttendance )

  // return the classes object
  return classAttendance 
}


// Run the functions
createAttendanceSummary( studentData );
populateAttendanceSummary( studentData, classNames ) 