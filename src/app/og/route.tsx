import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';

export async function GET() {
  const interRegular = readFileSync(
    join(process.cwd(), 'public/fonts/Inter-Regular.ttf')
  );

  const interBold = readFileSync(
    join(process.cwd(), 'public/fonts/Inter-Bold.ttf')
  );

  const profileImage = readFileSync(
    join(process.cwd(), 'public/profile-picture-circle.png')
  );
  const photoBase64 = profileImage.toString('base64');

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '1200px',
          height: '630px',
          backgroundColor: '#0F1117',
        }}
      >
        {/* Row 1 — 2026 tag, fixed height */}
        <div
          style={{
            display: 'flex',
            padding: '36px 100px 0px',
          }}
        >
          <span style={{ fontSize: 13, color: '#2D3748', fontFamily: 'Inter' }}>2026</span>
        </div>

        {/* Row 2 — main content, fills remaining space */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px 100px 36px',
          }}
        >
          {/* Left — text block */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: 20,
                color: '#9CA3AF',
                fontWeight: 400,
                fontFamily: 'Inter',
                marginBottom: 16,
              }}
            >
              Frontend Developer & Data Science Enthusiast
            </div>

            <div
              style={{
                width: '40px',
                height: '2px',
                backgroundColor: '#374151',
                marginBottom: 20,
                display: 'flex',
              }}
            />

            <div
              style={{
                fontSize: 72,
                color: '#F9FAFB',
                fontWeight: 700,
                fontFamily: 'Inter',
                marginBottom: 16,
              }}
            >
              Akbar Fai
            </div>

            <div
              style={{
                fontSize: 18,
                color: '#6B7280',
                fontWeight: 400,
                fontFamily: 'Inter',
              }}
            >
              akbarfai.dev
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginTop: 24,
                flexDirection: 'row',
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#22C55E',
                  display: 'flex',
                }}
              />
              <div
                style={{
                  fontSize: 14,
                  color: '#6B7280',
                  fontFamily: 'Inter',
                }}
              >
                Open to opportunities
              </div>
            </div>
          </div>

          {/* Right — circular photo */}
          <div
            style={{
              display: 'flex',
              width: 220,
              height: 220,
              flexShrink: 0,
            }}
          >
            <img
              src={`data:image/png;base64,${photoBase64}`}
              width={220}
              height={220}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: interRegular, weight: 400 },
        { name: 'Inter', data: interBold, weight: 700 },
      ],
    }
  );
}