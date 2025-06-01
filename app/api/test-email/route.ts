import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {
  try {
    // Simple test email
    const { data, error } = await resend.emails.send({
      from: 'Test <noreply@blakemakesthings.com>',
      to: ['blakejdanielson@gmail.com'],
      subject: 'Resend Test - Your contact form is working!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">🎉 Resend Test Successful!</h2>
          <p>This is a test email to confirm your Resend integration is working correctly.</p>
          <p><strong>Domain:</strong> blakemakesthings.com</p>
          <p><strong>API Key:</strong> ${process.env.RESEND_API_KEY ? 'Set ✅' : 'Missing ❌'}</p>
          <p>If you received this email, your contact forms should be working perfectly!</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend test error:', error)
      return NextResponse.json(
        { 
          success: false, 
          error: error.message,
          details: error 
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Test email sent successfully!',
        emailId: data?.id,
        apiKeySet: !!process.env.RESEND_API_KEY
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Test API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 