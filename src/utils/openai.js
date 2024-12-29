import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function getCourseRecommendations(userInfo) {
  console.log('Generating course recommendations for:', userInfo);
  
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a helpful academic advisor. Generate personalized course recommendations based on the student's information."
        },
        {
          role: "user",
          content: `Please provide course recommendations for a student with the following profile:
            Grade: ${userInfo.grade}
            Subjects of Interest: ${userInfo.subjects.join(', ')}
            Learning Style: ${userInfo.learningStyle}
            Academic Goals: ${userInfo.academicGoals}
            Course Load Preference: ${userInfo.courseLoad}`
        }
      ]
    });

    const recommendations = completion.choices[0].message.content;
    
    return {
      name: userInfo.fullName,
      preferences: `${userInfo.learningStyle} learner interested in ${userInfo.subjects.join(', ')}`,
      goals: userInfo.academicGoals,
      recommendedCourses: parseRecommendations(recommendations)
    };
  } catch (error) {
    console.error('Error generating recommendations:', error);
    throw error;
  }
}

function parseRecommendations(rawText) {
  // Simple parsing of OpenAI response into structured format
  const courses = rawText.split('\n').filter(line => line.trim().length > 0).map(course => ({
    name: course.split(':')[0] || course,
    reason: course.split(':')[1] || 'Aligns with your interests and goals'
  }));
  
  return courses.slice(0, 5); // Return top 5 recommendations
}