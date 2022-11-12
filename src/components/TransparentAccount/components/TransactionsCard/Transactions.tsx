import { Table } from "antd";
import { FC } from "react";
import { TransactionsResponse } from "../../../../types/types";
import { useTransactions } from "./useTransactions";
import 'antd/dist/antd.min.css';
import './Transactions.scss'

interface Props {
    transactions: TransactionsResponse[];
}

const Transactions: FC<Props> = ({ transactions }) => {
    const {data, columns} = useTransactions(transactions)
    return (
        <div className="Transactions">
            <h2 className="Transactions__title">Pohyby na účtu</h2>
            <Table 
                dataSource={data} 
                columns={columns}
                pagination={{position: ['bottomCenter']}} 
            />
        </div>
    );
};

export default Transactions;