import PropTypes from 'prop-types'; // ES6
import { Overlay, Modal } from './Overlay.styled';

// class BigPicture extends Component {
//   render() {
//     const { link, tags, closeOverlay } = this.props;
//     return (
//       <Overlay onClick={closeOverlay}>
//         <Modal>
//           <img src={link} alt={tags} />
//         </Modal>
//       </Overlay>
//     );
//   }
// }

// export default BigPicture;

export const BigPicture = props => {
  const { link, tags, closeOverlay } = props;
  return (
    <Overlay onClick={closeOverlay}>
      <Modal>
        <img src={link} alt={tags} />
      </Modal>
    </Overlay>
  );
};
BigPicture.propTypes = {
  link: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  closeOverlay: PropTypes.func.isRequired,
};
