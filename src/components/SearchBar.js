import Axios from 'axios';
import React, { Fragment, useState } from 'react'
import Celebrities_List from './Celebrities_List';
import Home from '../pages/Home'

const SearchBar = () => {

    const [celData, setCelData] = useState();
    const [celebrity, setCelebrity] = useState();

    function handleChange(e) {
        e.preventDefault();
        setCelebrity(e.target.value);
    }

    function getCelData() {
        const key = process.env.REACT_APP_KEY;
        const headers = { 'X-Api-Key': key }
        const url = `${process.env.REACT_APP_URL_NAME}=${celebrity}`;
        Axios.get(url, { headers })
            .then(res => {
                setCelData(res.data);
            })
            .catch(err => { console.log(err) });
    }
    return (
        <Fragment>
            <div>
                <nav className="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <div className="container">
                             <div className="search d-flex justify-content-center align-items-center">
                                <input className="form-control form-control-lg me-2" placeholder="Escriba aquí la celebridad que deseas consultar" type="search" onChange={handleChange} />
                                <button className="btn-lg" onClick={getCelData}>Buscar</button>
                            </div>
                        </div>
                    </div>
                </nav>
                {celData ? (<Celebrities_List celebrities={celData} />) : (<Home />)}

            </div>
        </Fragment>
    )
}

export default SearchBar
