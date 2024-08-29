import OpenAI from 'openai';

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function getCourseRecommendations(userInfo) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful course planning assistant." },
        { role: "user", content: `Based on the following student information, suggest 5 courses they should take next semester: ${JSON.stringify(userInfo)}` }
      ],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error in getCourseRecommendations:', error);
    return 'An error occurred while generating course recommendations. Please try again.';
  }
}
