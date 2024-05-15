
import { Link, scroller } from 'react-scroll';
import { ImProfile } from "react-icons/im";
import { MdCastForEducation } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa6";

import styles from './NavBurger.module.scss'


export const NavBurger = ({ isActive }) => {
  return (
    <nav className={`${styles.navBurger} ${isActive ? styles.navBurgerActive : styles.navBurgerUnactive}`}>
      <ul>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <ImProfile />
            <span>Обо мне</span>
          </Link>
        </li>
        <li>
          <Link
            to="education"
            spy={true}
            smooth={true}
            duration={500}
          >
            <MdCastForEducation />
            <span>Обучение</span>
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BsPersonWorkspace />
            <span>Опыт</span>
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FaBriefcase />
            <span>Проекты</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}