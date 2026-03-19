import { NextRequest, NextResponse } from 'next/server';
import { AppDataSource } from '@/lib/db/data-source';
import { ContactMessage } from '@/lib/db/entities/ContactMessage';

// Initialize database connection
async function initializeDB() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
}

export async function POST(request: NextRequest) {
  try {
    await initializeDB();
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const contactMessage = new ContactMessage();
    contactMessage.name = name;
    contactMessage.email = email;
    contactMessage.message = message;
    contactMessage.createdAt = new Date();

    const savedMessage = await AppDataSource.manager.save(contactMessage);

    return NextResponse.json(
      { success: true, message: 'Message saved successfully', data: savedMessage },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
