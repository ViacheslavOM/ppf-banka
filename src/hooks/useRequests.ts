import axios from "axios";
import { useState, useEffect } from "react";
import { AccountsResponse, BalanceResponse, TransactionsResponse } from "../types/types";

export const useRequests = () => {
    const [accounts, setAccounts] = useState<AccountsResponse[]>([]);
    const [balance, setBalance] = useState<BalanceResponse>();
    const [transactions, setTransactions] = useState<TransactionsResponse[]>([]);

    const accountsResponseRequest = () => {
        axios
            .get("accounts-response.json")
            .then((res) => setAccounts(res.data))
            .catch((err) => console.log(err.message));
    }
    const balanceResponseRequest = () => {
        axios
            .get("balance-response.json")
            .then((res) => setBalance(res.data))
            .catch((err) => console.log(err.message));
    }
    const transactionsResponseRequest = () => {
        axios
            .get("transactions-response.json")
            .then((res) => setTransactions(res.data))
            .catch((err) => console.log(err.message));
    }

    useEffect(() => {
        accountsResponseRequest();
        balanceResponseRequest();
        transactionsResponseRequest();
    }, []);

    return {accounts, balance, transactions}
}