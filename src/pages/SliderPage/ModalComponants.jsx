import Modal from 'react-modal';
import css from './SliderPage.module.css';

export function ModalComponent(props) {
  const { image, isOpen, onClose } = props;

  return (
    <Modal className={css.modal} isOpen={isOpen} onRequestClose={onClose}>
      <img src={image} alt="house" />
    </Modal>
  );
}
