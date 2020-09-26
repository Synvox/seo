import { useRef, useEffect } from "react";

export default function useScrollTriggers(callback, deps = [callback]) {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current || document;

    const listener = (e) => {
      let { target } = e;
      let isWindow = false;

      if (target === document) {
        target = document.body;
        isWindow = true;
      }

      const top =
        (isWindow ? window.scrollY : target.scrollTop) / target.scrollHeight;
      const bottom =
        ((isWindow ? window.scrollY : target.scrollTop) + target.clientHeight) /
        target.scrollHeight;

      callback({
        topPercent: top,
        bottomPercent: bottom,
        fromBottom:
          target.scrollHeight -
          ((isWindow ? window.scrollY : target.scrollTop) +
            (isWindow ? window.innerHeight : target.clientHeight)),
        fromTop: isWindow ? window.scrollY : target.scrollTop,
      });
    };

    listener({ target: element });
    element.addEventListener("scroll", listener);

    return () => {
      element.removeEventListener("scroll", listener);
    };
  }, deps);

  return ref;
}
