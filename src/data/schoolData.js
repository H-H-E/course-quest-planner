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
      { name: "English 10", credits: 4 },
      { name: "Mathematics 10", credits: 4 },
      { name: "Science 10", credits: 4 },
      { name: "Social Studies 10", credits: 4 },
      { name: "Physical Education 10", credits: 4 },
      { name: "Career Education 10", credits: 4 },
      { name: "Elective Course 1", credits: 4 },
      { name: "Elective Course 2", credits: 4 },
    ],
    additionalRequirements: {
      indigenousRequirement: {
        description: "Indigenous-focused course requirement",
        credits: 4
      },
      communityService: {
        description: "Community service hours",
        credits: 0
      }
    },
    assessments: [
      "Literacy Assessment",
      "Numeracy Assessment"
    ]
  },
  departments: {
    arts: {
      name: "Arts Department",
      courses: [
        { name: "Visual Arts", code: "ART101", grade: "10", prerequisite: "None", description: "Introduction to visual arts." },
        { name: "Music", code: "MUS101", grade: "10", prerequisite: "None", description: "Introduction to music theory and practice." }
      ]
    },
    sciences: {
      name: "Sciences Department",
      courses: [
        { name: "Biology", code: "BIO101", grade: "10", prerequisite: "None", description: "Introduction to biology." },
        { name: "Chemistry", code: "CHE101", grade: "10", prerequisite: "None", description: "Introduction to chemistry." }
      ]
    }
  },
  specialPrograms: {
    miniSchool: {
      name: "Mini School Program",
      description: "A specialized program for advanced learners.",
      size: "30 students",
      courses: {
        grade10: ["Advanced English", "Advanced Mathematics"],
        grade11: ["Advanced Science", "Advanced Social Studies"]
      }
    },
    careerPrograms: {
      name: "Career Programs",
      description: "Programs designed to prepare students for specific careers.",
      programs: [
        {
          name: "Health Sciences",
          institution: "Local Community College",
          credits: 16,
          schedule: "Monday to Friday",
          applicationDue: "March 1",
          startDates: ["September 1", "January 15"]
        },
        {
          name: "Technology",
          institution: "Tech Institute",
          credits: 20,
          schedule: "Monday to Thursday",
          applicationDue: "April 15",
          startDates: ["September 1"]
        }
      ]
    }
  }
};
