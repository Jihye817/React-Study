/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

type PromiseCreator = () => Promise<any>;

export default function usePromise(
  promiseCreator: PromiseCreator,
  deps: any[]
) {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        if (e instanceof Error) setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}
