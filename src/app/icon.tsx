import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '4px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: 'white' }}>GINM</span>
          <span style={{ color: '#dc2626' }}>TOOLS</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}