import moment from "moment";
import { FC } from "react";
import { BalanceResponse } from "../../../../types/types";
import './Balance.scss'

interface Props {
    balance?: BalanceResponse;
}

const Balance: FC<Props> = ({ balance }) => {
    const dateFormat = (isoDate: string) => {
        return moment(isoDate).format('L')
    }
    return (
        <div className="Balance">
            <h2 className="Balance__title">Aktuální zůstatek</h2>
            {balance ? 
            <ul>
                <li className="Balance__amount">Běžný účet:
                    <span>{balance.amount.value}</span>
                    <span className="Balance__currency">{balance.amount.currency}</span>
                </li>
                <li>Aktuální datum: <span>{dateFormat(balance.date)}</span></li>
            </ul> : 
            <>
                <h3>Oops! Something going wrong</h3>
            </>
            }
        </div>
    );
};

export default Balance;