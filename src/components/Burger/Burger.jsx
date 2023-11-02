import { useState, useRef, forwardRef } from 'react';
import styles from './Burger.module.scss';

import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Burger = () => {
    const [Open, setOpen] = useState(false)
    const refBurgerMenu = useRef(null);
    const handleClick = () => {
        setOpen(!Open)
    }

    return (
        <div className={styles.burger} >
            <div
                className={!Open ? styles.burgerArray : `${styles.burgerArray} ${styles.burgerCross}`}
                onClick={handleClick}
            />
            {<BurgerMenu  status={Open} setOpen={setOpen} />}
        </div>

    )
}