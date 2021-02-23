import React, { useState, useEffect } from 'react';
import './styles.scss';
// import { Icon } from '@iconify/react';
// import closeIcon from '@iconify/icons-iwwa/close';

export function Modal(props){

    const [active, setActive] = useState(null);

    useEffect(() => {

        // console.log(props.modalActive);
        ( props.modalActive === true ) ? setActive('active') : setActive(null);

    }, [props]);

    return (
        <div id="modal" className={active}>
            <div id="modalContent">
                {/* <div id="modalClose" onClick={() => setModalActive(null)}><Icon icon={closeIcon} /></div> */}
                {props.children}
            </div>
        </div>
    );

};