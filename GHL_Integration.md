# GoHighLevel API Integration Guide

This guide outlines the technical configuration required to connect the GBLM contact form to GoHighLevel (GHL) using the API V2 `Create Contact` endpoint.

## Prerequisites
1. **API Key (Bearer Token)**: Obtained from your HighLevel Marketplace or Location Settings.
2. **Location ID**: The unique identifier for your GoHighLevel sub-account.
3. **API Version**: `2021-04-15` (The standard version for V2).

## API Configuration Details
- **Endpoint**: `https://services.leadconnectorhq.com/contacts/`
- **Method**: `POST`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer YOUR_GHL_API_KEY",
    "Version": "2021-04-15",
    "Content-Type": "application/json"
  }
  ```

## Recommended Implementation (API Route)
To keep the API Key secure, the request should be made from a Next.js server-side API route rather than the client-side component.

### 1. Environment Variables (`.env.local`)
Add the following to your environment variables:
```bash
GHL_API_KEY=your_key_here
GHL_LOCATION_ID=your_location_id_here
```

### 2. API Route (`src/app/api/ghl/route.ts`)
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, email, service, notes } = body;

  try {
    const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
        'Version': '2021-04-15',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        locationId: process.env.GHL_LOCATION_ID,
        customFields: [
          { key: 'service_needed', field_value: service },
          { key: 'project_notes', field_value: notes }
        ],
        source: 'Website Form'
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create contact' }, { status: 500 });
  }
}
```

### 3. Update Contact Form (`src/components/Contact.tsx`)
Modify the `handleSubmit` function to call this internal API:

```javascript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  // Push to GHL
  await fetch('/api/ghl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  setIsSubmitted(true);
};
```

## Next Steps
- Provide the **API Key** and **Location ID** to proceed with the live integration.
- Identify any **Custom Field Keys** in GHL that should map to the "Service Needed" or "Project Notes" fields.
