// Styles.
import styles from "./comingSoonPage.module.css";

const ComingSoonPage: React.FC = () => {
  return (
    <main className=" flex flex-column justify-center items-center h-[85vh]">
      <div className={styles.container}>
        <h1 className="color-[#fff] text-center mt-[4rem]">Coming soon!</h1>
      </div>
    </main>
  );
};

export default ComingSoonPage;
