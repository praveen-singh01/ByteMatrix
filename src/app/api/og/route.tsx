import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#0f172a',
            color: 'white',
            padding: '40px',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '20px',
              background: 'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
              padding: '40px',
              width: '90%',
              height: '80%',
            }}
          >
            <h1
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                margin: '0',
                background: 'linear-gradient(to right, #3b82f6, #9333ea)',
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              ByteMatrix Software Solution
            </h1>
            <p
              style={{
                fontSize: '30px',
                margin: '0',
                marginBottom: '40px',
                textAlign: 'center',
                color: '#e2e8f0',
              }}
            >
              Full Stack Development Experts
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px',
                marginBottom: '40px',
              }}
            >
              {['Frontend', 'Backend', 'Full Stack', 'Contract-based'].map((skill) => (
                <div
                  key={skill}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: 'rgba(59, 130, 246, 0.3)',
                    borderRadius: '20px',
                    color: 'white',
                    fontSize: '24px',
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: '24px',
                margin: '0',
                textAlign: 'center',
                color: '#94a3b8',
              }}
            >
              Transforming ideas into exceptional digital experiences
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response('Failed to generate OG image', { status: 500 });
  }
}
