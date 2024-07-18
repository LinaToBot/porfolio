// Fonts.
import { Space_Grotesk } from "next/font/google";

("@media (max-width: 540px) {}");

/*SMALL*/
("@media (min-width: 541px) and (max-width: 768px) {}");

/*MEDIUM*/
("@media (min-width: 769px) and (max-width: 992px) {}");

/*LARGE*/
("@media (min-width: 992px) and (max-width: 1200px) {}");

/*EXTRA-LARGE*/
("@media (min-width: 1200px) {}");

export const space = Space_Grotesk({ subsets: ["latin"] });
