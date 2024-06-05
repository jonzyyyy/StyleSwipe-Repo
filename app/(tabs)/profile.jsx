import Profile from "@/components/tabs/Profile/Profile";
import useSession from "@/hooks/useSession";
import Auth from "@/components/tabs/_common/Auth";
import { useEffect, useState } from "react";
import getCards from "@/utils/getCards";

export default function HomeScreen() {
  const { sessionExists, session } = useSession();

  // if (!sessionExists) return <Auth />;
  return <Profile session={session} />;
}