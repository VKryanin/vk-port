
import { Link, scroller } from 'react-scroll';
import { ImProfile } from "react-icons/im";
import { MdCastForEducation } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa6";

import styles from './NavBurger.module.scss'


export const NavBurger = () => {
  return (
    <nav className={styles.navBurger}>
      <ul>
        <li>
          <Link>
            <ImProfile /> About
          </Link>
        </li>
        <li>
          <Link>
            <MdCastForEducation /> Education
          </Link>
        </li>
        <li>
          <Link>
            <BsPersonWorkspace /> Experience
          </Link>
        </li>
        <li>
          <Link>
            <FaBriefcase />All projects
          </Link>
        </li>
      </ul>
    </nav>
  )
}