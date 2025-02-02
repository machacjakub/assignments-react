import React from "react";
import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodoItem } from "../../api";
import { AddItemToggle } from "./AddItemToggle";

const FlexDiv = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 15px;
    padding-bottom: 15px;
    min-height: 30px;

    border-bottom: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header = (props: HeaderProps) => {
    const { children } = props;
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: addTodoItem,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
    });

    return (
        <FlexDiv>
            <h1>{children}</h1>
            <AddItemToggle onSubmit={(label) => mutate({ label })} />
        </FlexDiv>
    );
};
