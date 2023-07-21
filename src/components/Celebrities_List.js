import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCel, setCel } from '../reducers/slices/celSlices';



const Celebrities_List = ({ celebrities }) => {
    const dispatch = useDispatch();
    const { celebrities_List } = useSelector(state => state.cel)
    function handleAdd(celid) {
        const celebrity = celebrities.find(c => c.birthday === celid);
        if (celebrities_List.find(c => c.birthday === celid)) {
            dispatch(removeCel(celid));
        } else {
            dispatch(setCel(celebrity));
        }
        console.log(celebrity);
    }



    return (
        <div>
  <div>Celebrities_List</div>
  <div class="row" >
    {celebrities.map(c => {
      return (
        <div className="contenedor">
  <div className="row">
    <div className="col-sm-4">
      <div className="card">
        <div className="card-body px-3">
          <h4 className="card-title px-3">{c.name}</h4>
          <h2 className="card-text ">{c.age}</h2>
          <div>{c.occupation}</div>
          <button className="btn btn-primary" onClick={() => handleAdd(c.birthday)}>
            Agregar a Celebridades Favoritas
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
      )
    })}
  </div>
</div>)
}



export default Celebrities_List
