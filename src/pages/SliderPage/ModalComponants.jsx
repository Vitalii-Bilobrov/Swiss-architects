import Modal from 'react-modal';
import css from './SliderPage.module.css';
let modal = document.getElementById('myModal');

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

export function ModalComponent(props) {
  const { image, isOpen, onClose } = props;

  return (
    <Modal
      id="myModal"
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <img src={image} alt="house" />
    </Modal>
  );
}
