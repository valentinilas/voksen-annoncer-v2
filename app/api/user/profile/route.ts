'use server';

import { NextResponse } from 'next/server';
import { fetchUserProfile } from '@/app/login/actions';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const profileId = searchParams.get('profileId');

  if (!profileId) {
    return NextResponse.json({ error: 'Profile ID is required' }, { status: 400 });
  }

  try {
    const { userProfile, userProfileError } = await fetchUserProfile(profileId);
    if (userProfileError) {
      throw userProfileError;
    }
    return NextResponse.json({ userProfile });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}