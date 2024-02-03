import PcImage from "../Images/NewProductImage.png";
import PcImageTwo from "../Images/PcImageTwo.jpg";
import PcImageThree from "../Images/PcImageThree.jpg";
import "../Styles.css/Slideshow.css";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
function Slideshow() {
  let obe = 0;
  const [slideshowWidth, setSlideshowWidth] = useState(0);

  const slideshowObject = useRef<HTMLDivElement | null>(null);

  const slideshowImage1 = useRef<HTMLDivElement | null>(null);
  const slideshowImage2 = useRef<HTMLDivElement | null>(null);
  const slideshowImage3 = useRef<HTMLDivElement | null>(null);

  const image1View = useInView(slideshowImage1);
  const image2View = useInView(slideshowImage2);
  const image3View = useInView(slideshowImage3);
  const leftScrollWidth = slideshowObject.current?.scrollWidth;
  useEffect(() => {
    const leftScrollWidth = slideshowObject.current?.scrollWidth;
    const leftOffsetWidth = slideshowObject.current?.offsetWidth;
    const leftScrollConstraint = (leftScrollWidth ?? 0) - (leftOffsetWidth ?? 0);
    setSlideshowWidth(leftScrollConstraint);
    console.log(
      "scrollwidth:",
      slideshowObject.current?.scrollWidth,
      ". current width",
      slideshowObject.current?.offsetWidth
    ); //if we run a function like this and have an empty array it will run when the component renders otu
    console.log(image1View, image2View, image3View);
  }, []);

  return (
    <div className="slideshow-content">
      <motion.div ref={slideshowObject} className="slideshow-div">
        <motion.div className="inner-slideshow-div" drag="x" dragConstraints={{ right: 0, left: -slideshowWidth }}>
          <motion.div ref={slideshowImage1} className="slideshow-element" key="image1">
            <img className="pc-image-one  " src={PcImage}></img>
          </motion.div>
          <motion.div ref={slideshowImage2} className="slideshow-element">
            <img className="pc-image-two" src={PcImageTwo} key="image2"></img>
          </motion.div>
          <motion.div ref={slideshowImage3} className="slideshow-element">
            <img className="pc-image-three " src={PcImageThree} key="image3"></img>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="circles-div">
        {image1View === true ? <span className="circle-active"></span> : <span className="circle-inactive"></span>}
        {image2View === true ? <span className="circle-active"></span> : <span className="circle-inactive"></span>}
        {image3View === true ? <span className="circle-active"></span> : <span className="circle-inactive"></span>}
      </div>
    </div>
  );
}

export default Slideshow;
