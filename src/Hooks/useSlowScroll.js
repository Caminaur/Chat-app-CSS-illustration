import { useEffect } from "react";

export default function useSlowScroll(ref, speed = 0.3) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handler = (e) => {
      e.preventDefault();
      element.scrollBy({
        top: e.deltaY * speed,
        behavior: "smooth",
      });
    };

    element.addEventListener("wheel", handler, { passive: false });
    return () => element.removeEventListener("wheel", handler);
  }, [ref, speed]);
}
