import { FC } from 'react';

import style from './footer.module.scss';

export const Footer: FC = () => {
  return <footer className={style.footerWrapper}>&copy; 2023</footer>;
};
