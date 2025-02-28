import React from 'react';

interface TitleProps {
    dark: boolean;
    text1: string;
    text2: string;
}

const SectionTitle: React.FC<TitleProps> = ({ dark, text1, text2 }) => {
    return (
        <h2 className={`text-4xl  ${ dark ? "text-white" : "text-gray-800"} `}>
        {text1} <span className={`font-bold ${ dark ? "text-orange-300" : "text-orange-400"} `}>{text2}</span>
        </h2>
    );
};

export default SectionTitle;