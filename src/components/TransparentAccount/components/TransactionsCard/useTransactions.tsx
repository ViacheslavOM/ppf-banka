import type { ColumnsType } from 'antd/es/table/interface';
import moment from 'moment';
import { TransactionsResponse } from "../../../../types/types";

interface DataType {
    key: string;
    bookingDate: string;
    accountName: string;
    accountNumber: string;
    postingDate: string;
    details: string;
    value: number ;
    currency: string;
}

export const useTransactions = (transactions: TransactionsResponse[]) => {
    const dateFormat = (isoDate: string) => {
        return moment(isoDate).format('L')
    }

    const data: DataType[] = transactions.map(item => ({
        key: item.id,
        bookingDate: dateFormat(item.bookingDate),
        accountName: item.counterPartyAccount.accountName,
        accountNumber: item.counterPartyAccount.accountNumber,
        postingDate: dateFormat(item.postingDate),
        details: item.details.detail1,
        value: item.amount.value,
        currency: item.amount.currency,
    }))

    const columns: ColumnsType<DataType> = [
        {
            title: 'Datum zadaní',
            dataIndex: 'bookingDate',
            key: 'bookingDate',
            width: 100,
            sorter: (a, b) => moment(a.bookingDate).unix() - moment(b.bookingDate).unix(),
            ellipsis: true,
        },
        {
            title: 'Název protiúčtu',
            dataIndex: 'accountName',
            key: 'accountName',
            width: 100,
            ellipsis: true,
        },
        {
            title: 'Číslo účtu',
            dataIndex: 'accountNumber',
            key: 'accountNumber',
            width: 100,
            ellipsis: true,
        },
        {
            title: 'Datum transakce',
            dataIndex: 'postingDate',
            key: 'postingDate',
            width: 100,
            sorter: (a, b) => moment(a.postingDate).unix() - moment(b.postingDate).unix(),
            ellipsis: true,
        },
        {
            title: 'Detaily',
            dataIndex: 'details',
            key: 'details',
            width: 100,
            ellipsis: true,
        },
        {
            title: 'Částka',
            dataIndex: 'value',
            key: 'value',
            width: 50,
            sorter: (a, b) => a.value - b.value,
            ellipsis: true,
        },
        {
            title: 'Měna',
            dataIndex: 'currency',
            key: 'currency',
            width: 40,
            ellipsis: true,
            align: 'center',
        },
    ]

    return {data, columns}
}