import { useEffect, useState } from "react";

const CURRENT_VERSION = "1.0.66"; // version user is currently running

export default function useUpdateChecker() {
  const [updateData, setUpdateData] = useState(null);

  useEffect(() => {
    const checkVersion = async () => {
      try {
        const res = await fetch(`/version.json?t=${Date.now()}`);
        const data = await res.json();

        if (data.version !== CURRENT_VERSION) {
          setUpdateData(data); // store version, title, message
        }
      } catch (err) {
        console.log("Version check failed");
      }
    };

    checkVersion();
    const interval = setInterval(checkVersion, 30000); // every 30 sec

    return () => clearInterval(interval);
  }, []);

  return updateData; // null OR {version, title, message}
}
