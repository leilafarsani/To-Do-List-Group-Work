import ServerComponent from "./ServerComponent";
import ClientComponent from "./ClientComponent";
import styles from "./DatabaseTestPage.module.css";

export default function DatabaseTest() {
  return (
    <div className={styles.databaseTestPage}>
      <h1 className={styles.title}>Database Test</h1>
      <h2 className={styles.subtitle}>Server Component:</h2>
      {/* @ts-expect-error Server Component */}
      <ServerComponent />
      <h2 className={styles.subtitle}>Client Component:</h2>
      <ClientComponent />
    </div>
  );
}
