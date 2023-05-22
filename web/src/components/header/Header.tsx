import { FC } from 'react';

import style from './header.module.scss';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header className={style.headerWrapper}>
      <h3>
        <Link className={style.headerLink} to={'/'}>
          MERN APP
        </Link>
      </h3>
    </header>
  );
};
