import { useEffect, useState } from "react";

/**
 * Fetches a URL once and tracks loading/error state.
 *
 * The API wraps payloads as { success, message, data }, so this unwraps
 * `data` for callers. Aborts in flight on unmount to avoid setting state
 * on a torn-down component.
 *
 * `url` is the only dependency — deliberately never the fetched data,
 * which is what caused the previous refetch loops.
 */
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        return res.json();
      })
      .then((body) => {
        setData(body?.data ?? null);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(err.message || "Something went wrong");
        setLoading(false);
      });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
