import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { requestBuy, requestPlaces, selectPlaces } from '../../store/client';
import { useEffect, useState } from 'react';

// components
import StyledModal from '../../components/StyledModal/StyledModal';

// styles
import styles from './CellPlaces.module.scss';

export default function CellPlaces() {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const { id: reqId } = useParams();
  
  const places = useSelector(selectPlaces);
  const [modalState, setModelState] = useState(false);
  
  const [cellId, setCellId] = useState();
  const [id, setId] = useState();
  const [price, setPrice] = useState();
  
  useEffect(() => {
    dispatch(requestPlaces(reqId));
  }, []);
  
  const changeModelState = () => {
    setModelState(!modalState);
  };
  
  const setBuyData = (cellId, id, price) => () => {
    setCellId(cellId);
    setId(id);
    setPrice(price);
    setModelState(true);
  };
  
  const buyTicket = () => {
    dispatch(requestBuy({ cellId, id }));
    history.push(`/tickets/buy/${cellId}/${id}/${price}`);
  };
  
  function wrapCells() {
    return places.map((arr, i) => arr.map((el, j) =>
      <button
        className={styles.place}
        onClick={setBuyData(el.cellId, el.id, el.price)}
        key={(i + 1) * (j + 1)}
        style={{
          position: 'absolute',
          top: `calc(${i * 4}%)`,
          left: `calc(${j * 8.33}%)`,
        }}
        disabled={el.sold}
      >
        {el.id}
      </button>,
    ));
  }
  
  return (
    <>
      <StyledModal
        title="Бажаєте придбати?"
        isOpen={modalState}
        handleClose={changeModelState}
      >
        <div className={styles.modal_btns}>
          <button className={styles.btn} onClick={changeModelState}>Ні</button>
          <button className={styles.btn} onClick={buyTicket}>Так</button>
        </div>
      </StyledModal>
      <div className={styles.content_wrapper}>
        <div>
          <h1>Виберіть місце в секторі</h1>
          <div/>
        </div>
        <div className={styles.stadium_cell_wrapper}>
          {wrapCells()}
        </div>
      </div>
    </>
  );
}
