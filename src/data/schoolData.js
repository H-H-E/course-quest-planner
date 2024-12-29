export const schoolData = {
  schoolInfo: {
    name: "Point Grey Secondary School",
    address: "5350 East Boulevard, Vancouver, BC V6M 3V2",
    phone: "(604) 713-8220",
    website: "www.vsb.bc.ca/schools/point-grey"
  },
  graduationRequirements: {
    totalCredits: 80,
    requiredCourses: [
      {
        name: "Career Life Education 10",
        credits: 4
      },
      {
        name: "English 10",
        credits: 4
      },
      {
        name: "Mathematics 10",
        credits: 4  
      },
      {
        name: "Physical & Health Education 10",
        credits: 4
      },
      {
        name: "Science 10",
        credits: 4
      },
      {
        name: "Social Studies 10",
        credits: 4
      },
      {
        name: "English 11 (Indigenous-Focused) OR English 11",
        credits: 4
      },
      {
        name: "Mathematics 11 and/or 12",
        credits: 4
      },
      {
        name: "Science 11 and/or 12",
        credits: 4
      },
      {
        name: "Career Life Connections 12",
        credits: 4
      },
      {
        name: "English Studies 12",
        credits: 4
      },
      {
        name: "Social Studies 12 (Indigenous-Focused) OR any Social Studies 12",
        credits: 4
      }
    ],
    additionalRequirements: {
      artsEducation: {
        description: "One Arts Education or Applied Design, Skills & Technology course at grade 10, 11, or 12",
        credits: 4
      },
      indigenousFocused: {
        description: "At least 4 credits must have an Indigenous-Focus",
        credits: 4
      },
      electiveCredits: {
        description: "Additional Grade 10, 11, or 12 electives",
        credits: 28
      }
    },
    assessments: [
      "Grade 10 Numeracy Assessment",
      "Grade 10 Literacy Assessment", 
      "Grade 12 Literacy Assessment"
    ]
  },
  departments: {
    english: {
      name: "English",
      courses: [
        {
          code: "EN8",
          name: "English 8",
          grade: 8,
          prerequisite: "Language Arts 7",
          description: "Focus on core competencies of communication, critical and creative thinking, and personal/social skills through literature study"
        },
        {
          code: "EN9",
          name: "English 9",
          grade: 9,
          prerequisite: "English 8",
          description: "Extended core competencies with more sophisticated material and precision in reading, writing, listening, and speaking"
        },
        {
          code: "EN10",
          name: "English 10",
          grade: 10,
          prerequisite: "English 9",
          options: [
            {
              name: "Literary Studies/Composition 10",
              description: "Focus on literature analysis and essay writing"
            },
            {
              name: "Literary Studies/Creative Writing 10", 
              description: "Focus on creative writing and literary analysis"
            },
            {
              name: "Literary Studies/New Media 10",
              description: "Focus on digital media, film and literature"
            }
          ]
        }
      ]
    },
    mathematics: {
      name: "Mathematics",
      pathways: [
        {
          name: "Workplace Mathematics",
          description: "For entry into some college programs, trades or workplace",
          courses: ["Workplace Mathematics 10", "Workplace Mathematics 11"]
        },
        {
          name: "Foundations of Mathematics",
          description: "For post-secondary programs not requiring calculus",
          courses: ["Foundations of Mathematics 10", "Foundations of Mathematics 11", "Foundations of Mathematics 12"]
        },
        {
          name: "Pre-Calculus",
          description: "For post-secondary programs requiring calculus",
          courses: ["Pre-Calculus 10", "Pre-Calculus 11", "Pre-Calculus 12", "Calculus 12", "AP Calculus"]
        }
      ]
    }
  },
  specialPrograms: {
    miniSchool: {
      name: "Point Grey Mini School",
      description: "Enriched program for academically able, motivated students",
      size: "Approximately 140 students grades 8-12",
      courses: {
        grade8: [
          "Humanities 8M",
          "Math 8M", 
          "Science 8M",
          "PE 8M"
        ],
        grade9: [
          "Humanities 9-10",
          "Math 9M",
          "Science 9-10M", 
          "PE 9M"
        ]
      }
    },
    careerPrograms: {
      youthTrain: {
        description: "Industry certification or foundation level trade programs",
        programs: [
          {
            name: "Aircraft Maintenance Engineer",
            institution: "BCIT",
            credits: 16,
            schedule: "Monday-Friday",
            applicationDue: "March 1",
            startDates: ["August", "January"]
          }
        ]
      }
    }
  }
};
