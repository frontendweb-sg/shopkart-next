import { useEffect, useRef } from "react";

export default function useOutsideClick<T extends HTMLDivElement>(cb: Function) {
  const itemRef = useRef<T>(null);

  useEffect(() => {
    const handler = (ev: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(ev.target as Node)) {
        cb();
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [cb]);

  return itemRef;
}
