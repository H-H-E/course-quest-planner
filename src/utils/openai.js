import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

// Throw an error if the API key is not set
if (!import.meta.env.VITE_OPENAI_API_KEY) {
  throw new Error('OpenAI API key is not set. Please check your .env file.');
}

export async function getCourseRecommendations(userInfo) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful course planning assistant. Provide recommendations in a structured JSON format." },
        { role: "user", content: `Based on the following student information, suggest 3 courses they should take next semester. Return the response as a JSON object with the following structure: { name: string, preferences: string, goals: string, recommendedCourses: [{ name: string, reason: string }] }. Here's the student information: ${JSON.stringify(userInfo)}` }
      ],
      model: "gpt-3.5-turbo",
    });

    const recommendationsJson = JSON.parse(completion.choices[0].message.content);
    return recommendationsJson;
  } catch (error) {
    console.error('Error in getCourseRecommendations:', error);
    throw new Error('An error occurred while generating course recommendations. Please try again.');
  }
}
