import React, { useState, useEffect } from 'react';

import styles from './EducationItem.module.scss';

export const EducationItem = ({ name, profile, age, image }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isOpen]);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <li className={styles.educationItem}>
                <h6 className={styles.educationItemHeader}>{name}</h6>
                <p className={styles.educationItemProfile}>{profile}</p>
                <p className={styles.educationItemAge}>{age}</p>
                <div
                    className={isOpen ? `${styles.educationItemWrapper} ${styles.educationItemWrapperIsOpen}` : styles.educationItemWrapper}
                >
                    <img
                        className={styles.educationItemImageFull}
                        src={image}
                        alt="Diploma"
                    />
                    <div onClick={handleClick} className={styles.educationItemClose} />
                </div>

            </li>
            {isOpen && <div className={styles.educationItemOverlay} />}
        </>

    )
}