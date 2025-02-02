import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React from "react";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";
import { useBoolean } from "../hooks/useBoolean";
import { Form } from "./form";
import { Button, ButtonAppearance } from "./buttons/Button";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
`;

const Label = styled.label`
    margin-left: 15px;
`;

export type LiteeItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem = (props: LiteeItemProp) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;
    const isEditing = useBoolean(false);
    const handleSubmit = (label: string) => {
        isEditing.setFalse();
        onItemLabelEdit(label);
    };

    return isEditing.value ? (
        <Form initialValue={label} onCancel={isEditing.setFalse} onSubmit={handleSubmit} />
    ) : (
        <StyledDiv>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            <Label>{label}</Label>
            <Button onClick={isEditing.setTrue}>
                <Pencil1Icon />
            </Button>
            <Button appearance={ButtonAppearance.Danger} onClick={() => onItemDelete()}>
                <TrashIcon />
            </Button>
        </StyledDiv>
    );
};
