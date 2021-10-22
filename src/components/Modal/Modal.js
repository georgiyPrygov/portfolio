import "../../components/Project/ProjectDetailsView";
const Modal = (props) => {
  const { closeModal } = props;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="back-to-projects w-container" onClick={closeModal}>
          ← Back to projects
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
