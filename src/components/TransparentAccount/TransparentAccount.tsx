import { FC } from 'react';
import { AccountsResponse, BalanceResponse, TransactionsResponse } from '../../types/types';
import Account from './components/AccountCard/Account';
import Balance from './components/BalanceCard/Balance';
import Transactions from './components/TransactionsCard/Transactions';
import './TransparentAccount.scss';

interface Props {
    accounts: AccountsResponse[];
    balance?: BalanceResponse;
    transactions: TransactionsResponse[];
}

export const TransparentAccount: FC<Props> = ({accounts, balance, transactions}) => {
    return (
        <div className='TransparentAccount'>
            <h1>Transparentní účet</h1>
            <div className='TransparentAccount__grid'>
                <Balance balance={balance} />
                <Account accounts={accounts} />
            </div>
            <div className='TransparentAccount__table'>
                <Transactions transactions={transactions} />
            </div>
        </div>
    );
};
