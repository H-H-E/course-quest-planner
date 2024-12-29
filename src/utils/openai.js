// Demo version of course recommendations
export async function getCourseRecommendations(userInfo) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Generate dummy recommendations based on user info
  const dummyRecommendations = {
    name: userInfo.fullName || "Student",
    preferences: `Interested in ${userInfo.subjects.join(", ")}`,
    goals: userInfo.academicGoals || "Pursuing higher education",
    recommendedCourses: [
      {
        name: "Introduction to Computer Science",
        reason: "Aligns with your interest in technology and problem-solving skills."
      },
      {
        name: "Advanced Biology",
        reason: "Supports your goal of pursuing a career in the medical field."
      },
      {
        name: "World Literature",
        reason: "Enhances your critical thinking and writing skills, beneficial for all career paths."
      }
    ]
  };

  return dummyRecommendations;
}
