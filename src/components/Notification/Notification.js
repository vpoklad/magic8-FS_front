import styles from './Notification.module.css';

export const WelcomeNotification = () => {
  return (
    <div className={styles.containerNotification}>
      <div className={styles.notification}>
        <p className={styles.notificationPartOne}>
          Привіт! Для початку роботи внеси поточний баланс свого рахунку!
        </p>
        <p className={styles.notificationPartTwo}>
          Ти не можеш витрачати кошти поки їх у тебе немає :)
        </p>
        <span className={styles.triangle} />
      </div>
    </div>
  );
};
