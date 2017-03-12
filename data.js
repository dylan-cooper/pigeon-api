const students = [
  {
    first_name: "Pam",
    last_name: "Beasley",
    courses: [
      {
        name: "Introduction to Programming",
        course_code: "CIS*1500",
        grades: [
          {
            name: "Quiz 1",
            date_due: "2016-01-22",
            date_submitted: "2016-01-22",
            completion_status: "COMPLETED",
            grade: 100,
            weight: 10,
            course_median: 90,
            type: "QUIZ"
          },
          {
            name: "Assignment 1",
            date_due: "2016-01-25",
            date_submitted: "2016-01-24",
            completion_status: "COMPLETED",
            grade: 74,
            weight: 20,
            course_median: 79,
            type: "ASSIGNMENT"
          },
          {
            name: "Assignment 2",
            date_due: "2016-02-14",
            date_submitted: "2016-02-11",
            completion_status: "COMPLETED",
            grade: 82,
            weight: 20,
            course_median: 81,
            type: "ASSIGNMENT"
          },
          {
            name: "Assignment 3",
            date_due: "2016-03-02",
            date_submitted: "2016-02-27",
            completion_status: "COMPLETED",
            grade: 86,
            weight: 20,
            course_median: 84,
            type: "ASSIGNMENT"
          },
          {
            name: "Quiz 2",
            date_due: "2016-03-15",
            date_submitted: "2016-03-15",
            completion_status: "COMPLETED",
            grade: 100,
            weight: 10,
            course_median: 85,
            type: "QUIZ"
          },
          {
            name: "Assignment 4",
            date_due: "2016-03-29",
            date_submitted: "2016-03-27",
            completion_status: "COMPLETED",
            grade: 81,
            weight: 20,
            course_median: 77,
            type: "ASSIGNMENT"
          },
        ],
        overall_grade: 81
      },
      {
        name: "Calculus I",
        course_code: "MATH*1200",
        grades: [
          {
            name: "Midterm 1",
            date_due: "2016-01-25",
            date_submitted: "2016-01-24",
            completion_status: "COMPLETED",
            grade: 80,
            weight: 10,
            course_median: 79,
            type: "EXAM"
          },
          {
            name: "Midterm 2",
            date_due: "2016-02-14",
            date_submitted: "2016-02-11",
            completion_status: "COMPLETED",
            grade: 57,
            weight: 10,
            course_median: 60,
            type: "EXAM"
          },
          {
            name: "Midterm 3",
            date_due: "2016-03-02",
            date_submitted: "2016-02-27",
            completion_status: "COMPLETED",
            grade: 86,
            weight: 25,
            course_median: 84,
            type: "EXAM"
          },
          {
            name: "Final Exam",
            date_due: "2016-03-29",
            date_submitted: "2016-03-27",
            completion_status: "COMPLETED",
            grade: 50,
            weight: 60,
            course_median: 62,
            type: "EXAM"
          }            
        ],
        overall_grade: 75
      }
    ]
  },
  {
    first_name: "Dwight",
    last_name: "Schrute",
    courses: [ 
      {
        name: "Computer Security",
        course_code: "CIS*4110",
        grades: [
          {
            name: "A1",
            date_due: "2016-01-17",
            date_submitted: "2016-01-17",
            completion_status: "COMPLETED",
            grade: 54,
            weight: 10,
            course_median: 69,
            type: "ASSIGNMENT"
          },
          {
            name: "Quiz 1",
            date_due: "2016-01-22",
            date_submitted: "2016-01-22",
            completion_status: "COMPLETED",
            grade: 50,
            weight: 10,
            course_median: 80,
            type: "QUIZ"
          },
          {
            name: "A2",
            date_due: "2016-02-02",
            date_submitted: "2016-02-01",
            completion_status: "COMPLETED",
            grade: 58,
            weight: 10,
            course_median: 61,
            type: "ASSIGNMENT"
          },
          {
            name: "Quiz 2",
            date_due: "2016-02-03",
            date_submitted: "2016-02-03",
            completion_status: "COMPLETED",
            grade: 70,
            weight: 10,
            course_median: 72,
            type: "QUIZ"
          },
          {
            name: "Quiz 3",
            date_due: "2016-02-15",
            date_submitted: "2016-02-15",
            completion_status: "COMPLETED",
            grade: 60,
            weight: 10,
            course_median: 65,
            type: "QUIZ"
          },
          {
            name: "Quiz 4",
            date_due: "2016-02-28",
            date_submitted: "2016-02-28",
            completion_status: "COMPLETED",
            grade: 70,
            weight: 10,
            course_median: 75,
            type: "QUIZ"
          },
          {
            name: "A3",
            date_due: "2016-03-02",
            date_submitted: "2016-02-27",
            completion_status: "COMPLETED",
            grade: 66,
            weight: 10,
            course_median: 73,
            type: "ASSIGNMENT"
          },
          {
            name: "A4",
            date_due: "2016-03-15",
            date_submitted: "2016-03-14",
            completion_status: "COMPLETED",
            grade: 65,
            weight: 10,
            course_median: 70,
            type: "ASSIGNMENT"
          },
          {
            name: "Quiz 5",
            date_due: "2016-03-15",
            date_submitted: "2016-03-15",
            completion_status: "COMPLETED",
            grade: 60,
            weight: 10,
            course_median: 65,
            type: "QUIZ"
          },
          {
            name: "A5",
            date_due: "2016-03-28",
            date_submitted: "2016-03-28",
            completion_status: "COMPLETED",
            grade: 69,
            weight: 10,
            course_median: 70,
            type: "ASSIGNMENT"
          },
        ],
        overall_grade: 62
      },
      {
        name: "Human Computer Interaction",
        course_code: "CIS*4400",
        grades: [
          {
            name: "A1",
            date_due: "2016-01-10",
            date_submitted: "2016-01-08",
            completion_status: "COMPLETED",
            grade: 54,
            weight: 10,
            course_median: 69,
            type: "ASSIGNMENT"
          },
          {
            name: "A2",
            date_due: "2016-01-15",
            date_submitted: "2016-01-20",
            completion_status: "COMPLETED",
            grade: 58,
            weight: 10,
            course_median: 61,
            type: "ASSIGNMENT"
          },
          {
            name: "A3",
            date_due: "2016-01-20",
            date_submitted: "2016-01-30",
            completion_status: "COMPLETED",
            grade: 66,
            weight: 10,
            course_median: 73,
            type: "ASSIGNMENT"
          },
          {
            name: "A4",
            date_due: "2016-02-01",
            date_submitted: "2016-02-05",
            completion_status: "COMPLETED",
            grade: 65,
            weight: 10,
            course_median: 70,
            type: "ASSIGNMENT"
          },
          {
            name: "A5",
            date_due: "2016-02-10",
            date_submitted: "2016-02-15",
            completion_status: "COMPLETED",
            grade: 69,
            weight: 10,
            course_median: 70,
            type: "ASSIGNMENT"
          },
          {
            name: "A6",
            date_due: "2016-02-20",
            date_submitted: "2016-02-22",
            completion_status: "COMPLETED",
            grade: 50,
            weight: 10,
            course_median: 80,
            type: "ASSIGNMENT"
          },
          {
            name: "A7",
            date_due: "2016-03-01",
            date_submitted: "2016-02-27",
            completion_status: "COMPLETED",
            grade: 70,
            weight: 10,
            course_median: 72,
            type: "ASSIGNMENT"
          },
          {
            name: "A8",
            date_due: "2016-03-10",
            date_submitted: "2016-03-05",
            completion_status: "COMPLETED",
            grade: 60,
            weight: 10,
            course_median: 65,
            type: "ASSIGNMENT"
          },
          {
            name: "A9",
            date_due: "2016-03-20",
            date_submitted: "2016-03-15",
            completion_status: "COMPLETED",
            grade: 70,
            weight: 10,
            course_median: 75,
            type: "ASSIGNMENT"
          },
          {
            name: "A10",
            date_due: "2016-04-01",
            date_submitted: "2016-03-25",
            completion_status: "COMPLETED",
            grade: 60,
            weight: 10,
            course_median: 65,
            type: "ASSIGNMENT"
          }
        ],
        overall_grade: 62
      }
    ]
  },
  {
    first_name: 'Jim',
    last_name: 'Halpert',
    courses: [
      {
        name: 'Object Oriented Programming',
        course_code: 'CIS*2430',
        grades: [
          {
            name: "A1",
            date_due: "2016-01-17",
            date_submitted: "2016-01-17",
            completion_status: "COMPLETED",
            grade: 70,
            weight: 10,
            course_median: 69,
            type: "ASSIGNMENT"
          },
          {
            name: "Quiz 1",
            date_due: "2016-01-22",
            date_submitted: "2016-01-22",
            completion_status: "COMPLETED",
            grade: 80,
            weight: 10,
            course_median: 80,
            type: "QUIZ"
          },
          {
            name: "A2",
            date_due: "2016-02-02",
            date_submitted: "2016-02-01",
            completion_status: "COMPLETED",
            grade: 80,
            weight: 10,
            course_median: 61,
            type: "ASSIGNMENT"
          },
          {
            name: "Quiz 2",
            date_due: "2016-02-08",
            date_submitted: "2016-02-03",
            completion_status: "COMPLETED",
            grade: 60,
            weight: 10,
            course_median: 72,
            type: "QUIZ"
          },
          {
            name: "Quiz 3",
            date_due: "2016-02-15",
            date_submitted: "2016-02-15",
            completion_status: "COMPLETED",
            grade: 60,
            weight: 10,
            course_median: 65,
            type: "QUIZ"
          },
          {
            name: "Quiz 4",
            date_due: "2016-02-28",
            date_submitted: "2016-02-28",
            completion_status: "COMPLETED",
            grade: 40,
            weight: 10,
            course_median: 75,
            type: "QUIZ"
          },
          {
            name: "A3",
            date_due: "2016-03-02",
            date_submitted: "2016-02-27",
            completion_status: "COMPLETED",
            grade: 30,
            weight: 10,
            course_median: 73,
            type: "ASSIGNMENT"
          },
          {
            name: "A4",
            date_due: "2016-03-15",
            date_submitted: "2016-03-14",
            completion_status: "COMPLETED",
            grade: 0,
            weight: 10,
            course_median: 70,
            type: "ASSIGNMENT"
          },
          {
            name: "Quiz 5",
            date_due: "2016-03-15",
            date_submitted: "2016-03-15",
            completion_status: "COMPLETED",
            grade: 0,
            weight: 10,
            course_median: 65,
            type: "QUIZ"
          },
          {
            name: "A5",
            date_due: "2016-03-28",
            date_submitted: "2016-03-28",
            completion_status: "COMPLETED",
            grade: 0,
            weight: 10,
            course_median: 70,
            type: "ASSIGNMENT"
          },
        ],
        overall_grade: 42,
      },
      {
        name: 'Organizational Psychology',
        course_code: 'PSYC*3080',
        grades: [
          {
            name: "A1",
            date_due: "2016-01-17",
            date_submitted: "2016-01-17",
            completion_status: "COMPLETED",
            grade: 80,
            weight: 15,
            course_median: 69,
            type: "ASSIGNMENT"
          },
          {
            name: "A2",
            date_due: "2016-02-02",
            date_submitted: "2016-02-01",
            completion_status: "COMPLETED",
            grade: 80,
            weight: 15,
            course_median: 61,
            type: "ASSIGNMENT"
          },
          {
            name: "Quiz 2",
            date_due: "2016-02-08",
            date_submitted: "2016-02-03",
            completion_status: "COMPLETED",
            grade: 90,
            weight: 2,
            course_median: 72,
            type: "QUIZ"
          },
          {
            name: "Quiz 3",
            date_due: "2016-02-15",
            date_submitted: "2016-02-15",
            completion_status: "COMPLETED",
            grade: 100,
            weight: 2,
            course_median: 65,
            type: "QUIZ"
          },
          {
            name: "Quiz 4",
            date_due: "2016-02-28",
            date_submitted: "2016-02-28",
            completion_status: "COMPLETED",
            grade: 40,
            weight: 2,
            course_median: 75,
            type: "QUIZ"
          },
          {
            name: "A3",
            date_due: "2016-03-02",
            date_submitted: "2016-02-27",
            completion_status: "COMPLETED",
            grade: 30,
            weight: 15,
            course_median: 73,
            type: "ASSIGNMENT"
          },
          {
            name: "A4",
            date_due: "2016-03-15",
            date_submitted: "2016-03-14",
            completion_status: "COMPLETED",
            grade: 0,
            weight: 15,
            course_median: 70,
            type: "ASSIGNMENT"
          },
          {
            name: "Quiz 5",
            date_due: "2016-03-15",
            date_submitted: "2016-03-15",
            completion_status: "COMPLETED",
            grade: 0,
            weight: 10,
            course_median: 65,
            type: "QUIZ"
          },
          {
            name: "A5",
            date_due: "2016-03-28",
            date_submitted: "2016-03-28",
            completion_status: "COMPLETED",
            grade: 0,
            weight: 2,
            course_median: 70,
            type: "ASSIGNMENT"
          },
        ],
        overall_grade: 55,
      },
      {
        name: 'Physics with Applications',
        course_code: 'PHYS*1130',
        grades: [
          {
            name: "A1",
            date_due: "2016-01-03",
            date_submitted: "2016-01-17",
            completion_status: "COMPLETED",
            grade: 90,
            weight: 10,
            course_median: 69,
            type: "ASSIGNMENT"
          },
          {
            name: "Quiz 1",
            date_due: "2016-01-09",
            date_submitted: "2016-01-22",
            completion_status: "COMPLETED",
            grade: 80,
            weight: 3,
            course_median: 80,
            type: "QUIZ"
          },
          {
            name: "A2",
            date_due: "2016-01-18",
            date_submitted: "2016-02-01",
            completion_status: "COMPLETED",
            grade: 80,
            weight: 10,
            course_median: 61,
            type: "ASSIGNMENT"
          },
          {
            name: "Quiz 2",
            date_due: "2016-02-03",
            date_submitted: "2016-02-03",
            completion_status: "COMPLETED",
            grade: 60,
            weight: 3,
            course_median: 72,
            type: "QUIZ"
          },
          {
            name: "Quiz 3",
            date_due: "2016-02-10",
            date_submitted: "2016-02-15",
            completion_status: "COMPLETED",
            grade: 70,
            weight: 3,
            course_median: 65,
            type: "QUIZ"
          },
          {
            name: "Quiz 4",
            date_due: "2016-02-28",
            date_submitted: "2016-02-28",
            completion_status: "COMPLETED",
            grade: 80,
            weight: 3,
            course_median: 75,
            type: "QUIZ"
          },
          {
            name: "A3",
            date_due: "2016-03-02",
            date_submitted: "2016-02-27",
            completion_status: "COMPLETED",
            grade: 0,
            weight: 15,
            course_median: 73,
            type: "ASSIGNMENT"
          },
          {
            name: "A4",
            date_due: "2016-03-09",
            date_submitted: "2016-03-14",
            completion_status: "COMPLETED",
            grade: 0,
            weight: 15,
            course_median: 70,
            type: "ASSIGNMENT"
          },
          {
            name: "Quiz 5",
            date_due: "2016-03-16",
            date_submitted: "2016-03-15",
            completion_status: "COMPLETED",
            grade: 0,
            weight: 3,
            course_median: 65,
            type: "QUIZ"
          },
          {
            name: "A5",
            date_due: "2016-04-02",
            date_submitted: "2016-03-28",
            completion_status: "COMPLETED",
            grade: 0,
            weight: 10,
            course_median: 70,
            type: "ASSIGNMENT"
          },
        ],
        overall_grade: 31,
      }
    ],
  }
]

const persons = [
  { first_name: "Michael", last_name: "Smith", students: [ students[0], students[1], students[2] ] }
]

module.exports = { students, persons }
