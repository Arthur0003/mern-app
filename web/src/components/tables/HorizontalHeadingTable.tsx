import { FC } from 'react';

import style from './table.module.scss';
import { TableProps } from './tablesTypes';
import { Link } from 'react-router-dom';

export const HorizontalHeadingTable: FC<TableProps> = ({ accounts }) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Created On</th>
          <th>Owner</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {!!accounts &&
          accounts.map(({ _id, createdAt, name, owner }) => {
            return (
              <tr key={_id}>
                <td>{_id}</td>
                <td>{name}</td>
                <td>{createdAt}</td>
                <td>{owner}</td>
                <td>
                  <Link className={style.viewLink} to={`/accounts/${_id}`}>
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
