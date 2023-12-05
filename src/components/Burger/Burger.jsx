import { useState } from 'react';
import styles from './Burger.module.scss';

import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Burger = () => {
    const [Open, setOpen] = useState(false)
    const handleClick = (status) => {
        setOpen(status)
    }

    return (
        <div className={styles.burger} >
            <div
                className={!Open ? styles.burgerArray : `${styles.burgerArray} ${styles.burgerCross}`}
                onClick={()=>handleClick(!Open)}
            />
            {<BurgerMenu status={Open} setOpen={setOpen} />}
        </div>
    )
}