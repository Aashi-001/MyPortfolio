import { useEffect, useState } from "react";

export default function useCodeforcesStats(handle) {
  const [cfRating, setCfRating] = useState(null);
  const [cfRank, setCfRank] = useState(null);

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await fetch(
          `https://codeforces.com/api/user.info?handles=${handle}`
        );
        const data = await response.json();
        if (data.status === "OK") {
          setCfRating(data.result[0].rating);
          setCfRank(data.result[0].rank);
        }
      } catch (error) {
        console.error("Failed to fetch Codeforces rating:", error);
      }
    }

    getUserInfo();
  }, [handle]);

  return { cfRating, cfRank };
}
