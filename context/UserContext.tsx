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
import { fetchUserProfile } from "@/app/login/actions";

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
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const supabase = createClient();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user ?? null);
      if (user) {
        const { userProfile: profile } = await fetchUserProfile(user.id);
        setUserProfile(profile);
      }
      setLoading(false);
    })();

    // Listening to login events. Not needed for now, as we are using setUser and server side actions.
    // const { data: subscription } = supabase.auth.onAuthStateChange(
    //   (_, session) => {
    //     setUser(session?.user ?? null);
    //     setLoading(false);
    //   },
    // );

    // return () => {
    //   subscription.subscription.unsubscribe();
    // };
  }, [supabase]);

  useEffect(() => {
    console.log("Login detected, fetching profile");

    if (user) {
      (async () => {
        const { userProfile: profile } = await fetchUserProfile(user.id);
        setUserProfile(profile);
      })();
    } else {
      setUserProfile(null); // Clear profile when no user
    }
  }, [user]);

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
