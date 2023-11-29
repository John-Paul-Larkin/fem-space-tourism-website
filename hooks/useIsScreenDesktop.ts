
import { useEffect, useState } from "react";

const useIsScreenDesktop = (): boolean => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return screenWidth >= 769;
};

export default useIsScreenDesktop;


