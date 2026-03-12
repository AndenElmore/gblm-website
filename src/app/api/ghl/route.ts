import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, notes } = body;

    // 1. Check if environment variables are present
    if (!process.env.GHL_PIT || !process.env.GHL_LOCATION_ID) {
      console.error('SERVER ERROR: Missing GHL environment variables');
      return NextResponse.json({ 
        error: 'Configuration Error', 
        message: 'GHL keys are not configured on the server.',
        debug: {
          hasPit: !!process.env.GHL_PIT,
          hasLocation: !!process.env.GHL_LOCATION_ID
        }
      }, { status: 500 });
    }

    // Split name into first and last
    const nameParts = (name || '').trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

    const ghlPayload = {
      firstName,
      lastName,
      name,
      email,
      phone,
      locationId: process.env.GHL_LOCATION_ID,
      source: 'Website Contact Form',
      tags: ['Website Lead', service],
      customFields: [
        { key: 'service_requested', field_value: service },
        { key: 'project_notes', field_value: notes }
      ]
    };

    console.log(`Attempting GHL push for: ${email || name} to location: ${process.env.GHL_LOCATION_ID?.substring(0, 5)}...`);

    const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GHL_PIT}`,
        'Version': '2021-07-28', // Updated to standard stable version
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ghlPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('GHL API Rejection:', {
        status: response.status,
        data: data
      });
      return NextResponse.json({ 
        error: 'GoHighLevel Rejection', 
        message: data.message || 'The CRM rejected the lead.', 
        detail: data 
      }, { status: response.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact API Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
