/* eslint-disable no-unreachable */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getIconForResolution } from '../../utils/GetIconForResolution';

import styles from './Contact.module.scss';

export const Contact = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [icons, setIcons] = useState(getIconForResolution(screenWidth));
    const { github, tg, ln, inst } = icons;
    useEffect(() => {
        const handleResize = () => {
            const newScreenWidth = window.innerWidth;
            setScreenWidth(newScreenWidth);
            setIcons(getIconForResolution(newScreenWidth))
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }
        , []);

    return (
        <ul className={styles.contacts}>
            <li>
                <Link to={'https://github.com/VKryanin'} target='_blank'>
                    <svg className={styles.contactsIcons}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/contactIcons.svg${github}`} />
                    </svg>
                </Link>
            </li>
            <li>
                <Link to={'https://t.me/RJKvCyMbXo'} target='_blank'>
                    <svg className={styles.contactsIcons}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/contactIcons.svg${tg}`} />
                    </svg>
                </Link>
            </li>
            <li>
                <Link to={'https://www.linkedin.com/in/vitaliy-krianin-16564a263/'} target='_blank'>
                    <svg className={styles.contactsIcons}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/contactIcons.svg${ln}`} />
                    </svg>
                </Link>
            </li>
            <li>
                <Link to={'https://www.instagram.com/sooooooooooooooqa'} target='_blank'>
                    <svg className={styles.contactsIcons}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/contactIcons.svg${inst}`} />
                    </svg>
                </Link>
            </li>
        </ul>
    )
}