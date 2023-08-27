/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import AboutUs from "../features/HomePage/AboutUs";
import LandingPage from "../features/HomePage/LandingPage";
import AnimatedPage from "../features/Reusable/Animated";
import NavBar from "../features/Reusable/NavBar";

export default function HomePage() {
  const [photoNum, setPhotoNum] = useState(1);
  const { ref, inView, entry } = useInView({ threshold: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (photoNum === 4) {
        setPhotoNum((photoNum) => (photoNum = 1));
      } else {
        setPhotoNum((photoNum) => photoNum + 1);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [photoNum]);
  return (
    <AnimatedPage>
      <div>
        {!inView && (
          <NavBar
            sticky={"sticky"}
            top={0}
            background={"rgba(255, 88, 107, 0.5)"}
            height="9rem"
            inView={inView}
          />
        )}

        <div ref={ref}>
          <LandingPage photoNum={photoNum} />
        </div>
        <AboutUs photoNum={photoNum} />
      </div>
    </AnimatedPage>
  );
}
