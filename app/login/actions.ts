'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  const { data: authData, error } = await supabase.auth.signInWithPassword(data)
  if (error) {
    throw new Error(error.message)
  }
  // Optionally, you can revalidate paths if needed
  revalidatePath('/')
  return authData.session?.user || null
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { data: authData, error } = await supabase.auth.signUp(data)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath('/')
  return authData?.user || null
}

export async function logout() {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    return {success: false, error: error.message}
  }

  revalidatePath("/")
  return { success: true, error: null }
}




export const fetchUserProfile = async (profileId:string) => {
    const supabase = await createClient();
    try {
        const { data: userProfile, error } = await supabase
            .from('profiles')
            .select(`*, regions(region_name), genders(gender_name)`)
            .eq('id', profileId)
            .single();

        if (error) {
            throw new Error(error.message); // Throw the error if there is one
        }
        return { userProfile, userProfileError: null }; // Return user and no error
    } catch (error) {
        return { userProfile: null, userProfileError: error }; // Return user and no error
    }
};