import s from './Notification.module.css';

export const Notification = () => {
  return (
    <div className={s.containerNotification}>
      <div className={s.notification}>
        <p className={s.notificationPartOne}>
          Привіт! Для початку роботи внеси поточний баланс свого рахунку!
        </p>
        <p className={s.notificationPartTwo}>
          Ти не можеш витрачати кошти поки їх у тебе немає :)
        </p>
        <span className={s.triangle} />
      </div>
    </div>
  );
};
