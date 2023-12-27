import { useState, useEffect } from "react";

const useScroll = () => {
  const isClient = typeof window === "object"; // Check if we are on the client side
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(
    isClient ? window.scrollY : 0
  );

  useEffect(() => {
    if (!isClient) {
      return; // Do nothing during SSR
    }

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrollingUp(prevScrollPos < currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClient, prevScrollPos]);

  return isScrollingUp;
};

export default useScroll;
