import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 32,
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}
      >
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ color: 'white' }}>GINM</span>
            <span style={{ color: '#dc2626' }}>TOOLS</span>
          </div>
          <div style={{ 
            fontSize: 12, 
            color: '#888', 
            fontWeight: 'normal',
            letterSpacing: '2px'
          }}>
            SINCE 1958
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}