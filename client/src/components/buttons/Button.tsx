import { ButtonHTMLAttributes, ReactElement } from "react";
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

    &:hover {
        background-color: ${({ theme, $appearance }) => theme.colors[$appearance].hover};
    }
`;

export enum ButtonAppearance {
    Primary = "primary",
    Success = "success",
    Danger = "danger",
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    appearance?: ButtonAppearance;
    icon?: ReactElement;
}

export const Button = ({ appearance, icon, ...props }: IProps) => {
    return (
        <StyledButton $appearance={appearance ?? ButtonAppearance.Primary} {...props}>
            {icon}
        </StyledButton>
    );
};
