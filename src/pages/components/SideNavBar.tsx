import React,{ useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import styles from '../index.module.css';
import NavItem from 'react-bootstrap/NavItem';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';


// TODO: EL SIDE BAR DEBE PODER MOSTRAR SEGÚN EL ROL QUE TENGA EL USUARIO
const Sidebar = () => {

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const handleSelect = (eventKey: any) => window.history.pushState(null, '', `${eventKey}`);
    


    return (
      <ListGroup className={styles.sidebar} onSelect={handleSelect}>
        <NavItem className={styles.sidebarItem} >
          <div className={styles.logoIcon}>
          </div>
          <span className={styles.logoText}>SASPAV</span>
        </NavItem>
        <NavItem className={styles.sidebarItem}>
            <Nav.Link eventKey='/'>
                    Inicio
            </Nav.Link>
        </NavItem>
        {/*  eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
        <NavItem className={styles.sidebarItem}>
        <Nav.Link eventKey='usuarios'>
            Usuarios
        </Nav.Link>
        </NavItem>
        <NavItem className={styles.sidebarItem}>
            <Nav.Link eventKey='configuraciones'>
                Configuraciones
            </Nav.Link>
        </NavItem>
      </ListGroup>
    );
};
  
export default Sidebar;