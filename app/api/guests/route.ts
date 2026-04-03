export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { fetchAllGuests } from '@/lib/guests';

export async function GET() {
  const guests = await fetchAllGuests();
  return NextResponse.json(guests);
}
