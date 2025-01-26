"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";

interface UserProfile {
  id: string;
  username: string;
  bio: string;
  contact_email: string;
  contact_phone: string;
  contact_sms: string;
  avatar_url: string;
  birthday: string;
  is_admin: boolean;
  // Add other profile fields as needed
  regions: { region_name: string }[];
  genders: { gender_name: string }[];
}

interface UserContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  userProfile: UserProfile | null;
}

interface UserProviderProps {
  children: ReactNode;
  initialUser: User | null;
  initialUserProfile: UserProfile | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({
  children,
  initialUser,
  initialUserProfile,
}: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(initialUser);
  const [loading, setLoading] = useState<boolean>(false);
  const [userProfile] = useState<UserProfile | null>(initialUserProfile);

  const supabase = createClient();

  useEffect(() => {
    // Listen for auth changes and update user accordingly
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      },
    );

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, [supabase]);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        setUser,
        userProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
