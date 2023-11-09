import { useEffect, useRef } from "react";

export default function useOutsideClick<T extends HTMLDivElement>(cb: Function) {
  const itemRef = useRef<T>(null);

  useEffect(() => {
    const handler = (ev: MouseEvent) => {
      if (itemRef.current && !(ev.target as Node).contains(itemRef.current)) {
        cb();
      }
    };
    document.addEventListener("click", handler, { capture: true });
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [cb]);

  return itemRef;
}
