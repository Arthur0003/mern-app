import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Axios } from '../../axios/axios';
import { IAccount } from '../accounts/accountsTypes';
import { VerticalHeadingTable } from '../tables/VerticalHeadingTable';
import { Loader } from '..';

export const Account: FC = () => {
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState<IAccount>({
    _id: '',
    createdAt: '',
    name: '',
    owner: '',
    updatedAt: '',
  });
  const { id } = useParams();

  // Getting an account from server
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data: account } = await Axios.get(`api/accounts/${id}`);
        setAccount(account);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='container'>
      <VerticalHeadingTable
        _id={account._id}
        name={account.name}
        owner={account.owner}
        createdAt={account.createdAt}
        updatedAt={account.updatedAt}
      />
    </div>
  );
};
