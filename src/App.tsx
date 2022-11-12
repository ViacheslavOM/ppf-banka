import { Header } from "./components/Header";
import { TransparentAccount } from "./components/TransparentAccount";
import { useRequests } from "./hooks";

export const App = () => {
    const {accounts, balance, transactions} = useRequests();

    return (
        <div className="App">
            <Header/>
            <TransparentAccount 
                accounts={accounts} 
                balance={balance} 
                transactions={transactions}
            />
        </div>
    );
}

