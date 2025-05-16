import { NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define the FAQ data about ByteMatrix's skills and projects
const faqData = `
ByteMatrix Software Solution is a team of three developers:
1. Praveen Singh - Full Stack Developer with expertise in React, Next.js, Node.js
2. Pragya Aditya - Frontend Developer specializing in UI/UX, React, and Vue.js
3. Mihir Jadhav - AI and Backend Developer with expertise in Python and machine learning

Our skills include:
- Frontend: React, Next.js, Vue.js, Tailwind CSS, Framer Motion
- Backend: Node.js, Express, Python, Django
- Database: MongoDB, PostgreSQL, MySQL
- DevOps: AWS, Git, CI/CD
- Design: Figma, UI/UX

Our services include:
- Full-stack web development
- Mobile app development
- UI/UX design
- Contract-based development
- 24/7 support for clients

We have completed 50+ projects with 100% client satisfaction.
`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages are required and must be an array" },
        { status: 400 }
      );
    }

    // Add system message with FAQ data
    const conversationWithContext = [
      {
        role: "system",
        content: `You are a helpful assistant for ByteMatrix Software Solution. Answer questions about the team, their skills, and services based on this information: ${faqData}. Keep responses concise and friendly. If you don't know the answer, suggest contacting the team directly at contact@example.com.`,
      },
      ...messages,
    ];

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: conversationWithContext,
      max_tokens: 150,
      temperature: 0.7,
    });

    // Return the response
    return NextResponse.json({
      message: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}
