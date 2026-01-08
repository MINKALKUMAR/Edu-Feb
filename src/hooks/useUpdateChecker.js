import { useEffect, useState } from "react";

const CURRENT_VERSION = "1.0.0"; // SAME as version.json

export default function useUpdateChecker() {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    const checkVersion = async () => {
      try {
        const res = await fetch(`/version.json?t=${Date.now()}`);
        const data = await res.json();

        if (data.version !== CURRENT_VERSION) {
          setUpdateAvailable(true);
        }
      } catch (err) {
        console.log("Version check failed");
      }
    };

    checkVersion();
    const interval = setInterval(checkVersion, 30000); // check every 30 sec

    return () => clearInterval(interval);
  }, []);

  return updateAvailable;
}
