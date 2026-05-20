import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();
  const user = null; // Your auth state variable here

  useEffect(() => {
    // Wrap inside a microtask or timeout to let the layout mount first
    const timer = setTimeout(() => {
      if (!user) {
        router.replace("/(auth)/login");
      } else {
        router.replace("/(tabs)");
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [user]);

  return null; 
}
