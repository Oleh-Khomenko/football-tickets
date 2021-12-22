import Modal from 'react-modal';
import styles from './StyledModal.module.css';

export default function StyledModal(
  {
    children,
    title,
    handleClose,
    ...props
  }) {
  return (
    <Modal
      {...props}
      appElement={document.getElementById('root')}
      className={styles.styled_modal}
      overlayClassName={styles.modal_overlay}
      onRequestClose={handleClose}>

      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <h2 className={styles.modal_title}>{title}</h2>
          <button
            className={styles.modal_close_button}
            onClick={handleClose}
          >&#x2716;</button>
        </div>
        {children}
      </div>


    </Modal>
  );
}
