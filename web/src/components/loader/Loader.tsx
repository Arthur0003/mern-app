import { FC } from 'react';

import style from './loader.module.scss';

export const Loader: FC = () => {
  return (
    <div className={style.loaderWrapper}>
      <div className={style['lds-ripple']}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
