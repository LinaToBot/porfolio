// Libraries.
import Image from "next/image";
// Fonts.
import { Space_Grotesk } from "next/font/google";
// Module style.
import styles from "./page.module.css";
// Component.
import { TextContent } from "@/app/components/TextContent/TextContent";
// Public.
import design from "../../../../public/designs.svg";
import { Footer } from "@/app/components/Footer/Footer";

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
        <div className={styles.responsiveDiv}>
          <Image src={design} alt="responsive design" />
        </div>
      </div>

      <div className={styles.responsivePage}>
        <div className={styles.responsiveDiv}>
          <TextContent
            heading2="Set a Flexible width"
            paragraph="First, you have to set the width of the elements with a flexible measure, for example: 100%."
          />
        </div>
        <div className={styles.responsiveDiv}>
          <p>This div have a width to 100%</p>

          <p>
            This p have a maximum width with 30rem.
            <br />
            If you want to try, try zooming in and out.
          </p>
        </div>
      </div>

      <div className={styles.responsivePage}>
        <div className={styles.responsiveDiv}>
          <TextContent
            heading2=" Set maximum width limits"
            paragraph="Second, if it`s necessary, set another measures, but now related to the disposition that one element will take respect to the others."
          />
        </div>
        <div className={styles.responsiveDiv}>Text </div>
      </div>

      <div className={styles.responsivePage}>
        <div className={styles.responsiveDiv}>
          <TextContent
            heading2="Different widths and breakpoints"
            paragraph="Whether you have decided to implement step two or not, you must use media queries if you want your page to adapt to different devices."
          />
        </div>
        <div className={styles.responsiveDiv}>Text </div>
      </div>
      <Footer />
    </>
  );
};

export default ResponsivePage;
