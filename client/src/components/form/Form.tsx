import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import React, { FormEvent, useState } from "react";
import styled from "styled-components";

import { Input } from "./Input";
import { Button, ButtonAppearance } from "../buttons/Button";

const FormStyled = styled.form`
    display: flex;
`;

type FormProps = {
    initialValue: string;
    onSubmit: (value: string) => void;
    onCancel: () => void;
};

export const Form = (props: FormProps) => {
    const { initialValue, onSubmit, onCancel } = props;

    const [inputValue, setInputValue] = useState(initialValue);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(inputValue);
    };

    return (
        <FormStyled onSubmit={handleSubmit} onReset={onCancel}>
            <Input value={inputValue} onValueChange={setInputValue} />
            <Button type={"submit"} appearance={ButtonAppearance.Success}>
                <CheckIcon />
            </Button>
            <Button type={"reset"} appearance={ButtonAppearance.Danger}>
                <Cross1Icon />
            </Button>
        </FormStyled>
    );
};
