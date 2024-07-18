// Libraries.

// Fonts.

// Components.

// Styles.
import styles from "./page.module.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col">
      <section className={`${styles.container}`}> {children}</section>
    </main>
  );
}
