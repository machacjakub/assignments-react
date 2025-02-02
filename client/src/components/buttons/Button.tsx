import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledButton = styled.button<{ $appearance: string }>`
    cursor: pointer;
    background-color: ${({ theme, $appearance }) => theme.colors[$appearance].background};
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export enum ButtonAppearance {
    Primary = "primary",
    Success = "success",
    Danger = "danger",
}

interface IProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
    appearance?: ButtonAppearance;
}

export const Button = ({ children, appearance, ...props }: IProps) => {
    return (
        <StyledButton $appearance={appearance ?? ButtonAppearance.Primary} {...props}>
            {children}
        </StyledButton>
    );
};
