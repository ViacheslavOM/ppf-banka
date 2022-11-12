import { CopyOutlined } from "@ant-design/icons";
import { FC } from "react";
import { AccountsResponse } from "../../../../types/types";
import './Account.scss';
import { useAccount } from "./useAccount";

interface Props {
    accounts: AccountsResponse[];
}

const Account: FC<Props> = ({ accounts }) => {
    const {copyCode, copyText} = useAccount()
    return (
        <div className="Account">
            <h2 className="Account__title">Informace o účtu</h2>
            {accounts.map(item => (
                <ul key={item.id}>
                    <li>Název účtu:
                        <span>{item.name}</span>
                    </li>
                    <li>Měna účtu:
                        <span>{item.currency}</span>
                    </li>
                    <li>Číslo účtu:
                        <span>{item.identification.otherAccountNumber}/{item.servicer.bankCode}</span>
                        <CopyOutlined onClick={() => copyCode(`${item.identification.otherAccountNumber}/${item.servicer.bankCode}`)}/>
                        <span className="copy">{copyText}</span>
                    </li>
                    <li>IBAN:
                        <span>{item.identification.iban}</span>
                    </li>
                    <li>BIC:
                        <span>{item.servicer.bic}</span>
                    </li>
                </ul>
            ))}
            
        </div>
    );
};

export default Account;