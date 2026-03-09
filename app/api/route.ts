import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        name: "StakeVladDracula API Proxy",
        version: "2.2.0",
        description: "AI API Proxy Service",
        endpoints: {
            "OpenAI": "/openai/*",
            "Claude": "/anthropic/*",
            "Gemini": "/gemini/*",
            "Groq": "/groq/*",
            "OpenRouter": "/openrouter/*",
            "Test": "/headers"
        },
        powered_by: "StakeVladDracula-Router v2.0"
    }, {
        headers: {
            'StakeVladDracula-Router': 'v2.0'
        }
    });
} 