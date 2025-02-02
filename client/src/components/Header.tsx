import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";
import styled from "styled-components";
import { ButtonAppearance } from "./buttons/Button";
import { RoundedButton } from "./buttons/RoundedButton";

const StyledDiv = styled.header`
    display: flex;
`;

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header = (props: HeaderProps) => {
    const { children } = props;

    return (
        <StyledDiv>
            <h1>{children}</h1>
            <RoundedButton appearance={ButtonAppearance.Success}>
                <PlusIcon />
            </RoundedButton>
        </StyledDiv>
    );
};
