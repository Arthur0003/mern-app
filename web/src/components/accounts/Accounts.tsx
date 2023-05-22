import { FC, useEffect, useState } from 'react';

import { Axios } from '../../axios/axios';
import { IAccount } from './accountsTypes';
import { HorizontalHeadingTable } from '../tables/HorizontalHeadingTable';
import { Loader } from '..';

export const Accounts: FC = () => {
  const [loading, setLoading] = useState(false);
  const [accounts, setAccounts] = useState<IAccount[]>([]);

  // Getting all accounts from server
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data: accounts } = await Axios.get('api/accounts');
        setAccounts(accounts);
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
      <HorizontalHeadingTable accounts={accounts} />
    </div>
  );
};
