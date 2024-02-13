import styles from './Footer.module.scss'

import { useState } from 'react';

import { Contact } from '../Contact/Contact'

export const Footer = () => {

  const [message, setMessage] = useState('');

  const handleEmailClick = () => {
    const emailSubject = 'Business Inquiry';
    const emailBody = 'Hello, I have a business inquiry.';
    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);
    const mailtoURL = `mailto:krianinvv@internet.ru?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = mailtoURL;
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerArr}>
        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="58" viewBox="0 0 65 58" fill="none">
          <path d="M33.6104 2.82845L44.6302 14.0075C47.7843 17.0475 50.2591 18.4495 53.4245 19.2286C55.1271 19.6476 56.4879 21.1532 56.4862 23.052C56.4845 25.2265 54.8705 27.1136 52.5981 27.1155C50.3257 27.1174 0.0854749 27.1581 0.0854749 27.1581C0.0399294 27.1583 0.00297785 27.195 0.00294171 27.2402L2.91176e-08 30.8209C-3.78319e-05 30.8662 0.0368515 30.9029 0.0823953 30.9029L52.5951 30.8601C57.217 30.8564 57.7569 37.6891 53.3878 38.7412C50.1173 39.5289 47.5354 40.9654 44.1799 44.3048L33.5611 55.1723C33.53 55.2041 33.53 55.2548 33.561 55.2865L35.9436 57.7253C35.9761 57.7585 36.0299 57.7583 36.0622 57.7248L64.977 29.089C65.0076 29.0571 65.0076 29.0069 64.977 28.9753L36.1119 0.275022C36.0796 0.241706 36.0259 0.241651 35.9934 0.274908L33.6103 2.71393C33.579 2.74588 33.5791 2.7967 33.6104 2.82845Z" fill="#64FFDA" />
        </svg>
        <Contact />
      </div>
      <div className={styles.footerWrapper}>
        <p className={styles.footerText}>Business inquiries</p>
        <p className={styles.footerEmail} onClick={handleEmailClick}>krianinvv@internet.ru</p>
        <p className={styles.footerCopy}>VITALY KRYANIN © 2023</p>
      </div>
    </footer>
  )
}