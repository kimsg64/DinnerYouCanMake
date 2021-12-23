import { useEffect, useState } from "react";

const useIntersectionObserver = (refElement) => {
  const [color, setColor] = useState("#ff4d4d");
  const [darkColor, setDarkColor] = useState("#222f3e");

  useEffect(() => {
    let observer;
    const createObserver = () => {
      const options = {
        root: null,
        rootMargin: "0px",
        thresold: [0, 1],
      };

      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio === 1) {
            setColor("#ff4d4d");
            setDarkColor("#222f3e");
          } else {
            setColor("#b33939");
            setDarkColor("#1e272e");
          }
        });
      };
      observer = new IntersectionObserver(callback, options);

      const target = refElement.current;
      observer.observe(target);
    };
    createObserver();

    return () => {
      observer.disconnect();
    };
  }, []);

  return { color, darkColor };
};

export default useIntersectionObserver;
