import { useState } from "react";

export const useAccount = () => {
    const [copyText, setCopyText] = useState<string>('');

    const copyCode: (text: string) => void = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setCopyText('Copied');
                setTimeout(function () {
                    setCopyText('');
                }, 2000);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return {copyCode, copyText};
};
