import { useEffect, useState } from "react";

export const useIsOverflown = ref => {
  const [isOverFlown, setIsOverFlown] = useState(null);

  useEffect(() => {
    const scrollHeight = ref.current.scrollHeight;
    const clientHeight = ref.current.clientHeight;

    setIsOverFlown(scrollHeight > clientHeight);
  }, [ref]);

  return isOverFlown;
};
