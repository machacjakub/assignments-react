import { CircleBackslashIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

const EmptyListWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const EmptyList = () => (
    <EmptyListWrapper>
        <CircleBackslashIcon /> No todo items in the list
    </EmptyListWrapper>
);
