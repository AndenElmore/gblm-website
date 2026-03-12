import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, notes } = body;

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

    const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GHL_PIT}`,
        'Version': '2021-04-15',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ghlPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('GHL API Error:', data);
      return NextResponse.json({ error: 'GHL API failed', detail: data }, { status: response.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact API Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
