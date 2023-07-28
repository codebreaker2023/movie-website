import React from "react";

export default interface SearchProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onClicked: () => void;
}