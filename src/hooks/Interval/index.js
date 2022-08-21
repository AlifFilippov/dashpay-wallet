import {
  useEffect,
  useRef,
} from 'react';

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    let id;
    async function tick() {
      try {
        return await savedCallback.current();
      } catch (error) {
        return null;
      } finally {
        id = setTimeout(tick, delay);
      }
    }
    if (delay) {
      tick();
      return () => {
        clearTimeout(id);
      };
    }
  }, [delay]);
}

export default function Interval({ callback, delay }) {
  useInterval(callback, delay);
  return null;
}
