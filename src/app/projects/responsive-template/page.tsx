// Libraries.
import Image from "next/image";
// Module style.
import styles from "./page.module.css";
// Component.
import { TextContent } from "@/app/components/TextContent/TextContent";
import { Footer } from "@/app/components/Footer/Footer";
// Public.
import design from "../../../../public/responsive_design.png";
import widthImage from "../../../../public/flexible-width.png";
import limitsImage from "../../../../public/limits.png";
import breakpointsImage from "../../../../public/breakpoints.png";

const ResponsivePage: React.FC = () => {
  return (
    <>
      <div className={styles.responsivePage}>
        <div className={styles.responsiveDiv}>
          <TextContent
            heading1="Responsive Design"
            paragraph="This is a mini project where you can learn how build a responsive page."
          />
        </div>
        <div className={styles.responsiveImage}>
          <Image
            src={design}
            alt="responsive design"
            objectFit="scale-down"
            width={600}
          />
        </div>
      </div>

      <div className={styles.responsivePage}>
        <div className={styles.responsiveDiv}>
          <TextContent
            heading2="Set a Flexible width"
            paragraph="First, you have to set the width of the elements with a flexible measure, for example: 100%."
          />
        </div>
        <div className={styles.responsiveImage}>
          <Image
            src={widthImage}
            alt="css widths"
            objectFit="scale-down"
            width={600}
          />
        </div>
      </div>

      <div className={styles.responsivePage}>
        <div className={styles.responsiveDiv}>
          <TextContent
            heading2=" Set maximum width limits"
            paragraph="Second, if it`s necessary, set another measures, but now related to the disposition that one element will take respect to the others."
          />
        </div>
        <div className={styles.responsiveImage}>
          <Image
            src={limitsImage}
            alt="responsive design"
            objectFit="scale-down"
            width={600}
          />
        </div>
      </div>

      <div className={styles.responsivePage}>
        <div className={styles.responsiveDiv}>
          <TextContent
            heading2="Different widths and breakpoints"
            paragraph="Whether you have decided to implement step two or not, you must use media queries if you want your page to adapt to different devices."
          />
        </div>
        <div className={styles.responsiveImage}>
          <Image
            src={breakpointsImage}
            alt="responsive design"
            objectFit="scale-down"
            width={600}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResponsivePage;
