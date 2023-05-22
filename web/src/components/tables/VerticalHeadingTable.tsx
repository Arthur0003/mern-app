import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './table.module.scss';
import { IAccount } from '../accounts/accountsTypes';

export const VerticalHeadingTable: FC<IAccount> = ({
  createdAt,
  updatedAt,
  _id,
  owner,
  name,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <>
      <table className={style.table}>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{_id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>Owner</th>
            <td>{owner}</td>
          </tr>
          <tr>
            <th>Created On</th>
            <td>{createdAt}</td>
          </tr>
          <tr>
            <th>Updated On</th>
            <td>{updatedAt}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleNavigate} className={style.btn}>
        Go to all account
      </button>
    </>
  );
};
