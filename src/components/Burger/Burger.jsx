import { useState } from 'react';
import styles from './Burger.module.scss';

import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Burger = () => {
    const [Open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!Open)
        console.log(Open);
    }


    return (
        <div className={styles.burger}>
            <div
                className={!Open ? styles.burgerArray : `${styles.burgerArray} ${styles.burgerCross}`}
                onClick={handleClick}
            />
            {<BurgerMenu status={Open} />}
        </div>

    )
}