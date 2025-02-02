import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React from "react";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";
import { useBoolean } from "../hooks/useBoolean";
import { Form } from "./form";
import { Button, ButtonAppearance } from "./buttons/Button";
import { FlexWrapperWithGap } from "./FlexWrapperWithGap";

const Label = styled.label`
    margin-left: 8px;
`;

export type ListItemProps = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem = ({ label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete }: ListItemProps) => {
    const isEditing = useBoolean(false);

    const handleSubmit = (label: string): void => {
        isEditing.setFalse();
        onItemLabelEdit(label);
    };

    if (isEditing.value) {
        return <Form initialValue={label} onCancel={isEditing.setFalse} onSubmit={handleSubmit} />;
    }

    return (
        <FlexWrapperWithGap>
            <FlexWrapperWithGap>
                <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
                <Label>{label}</Label>
            </FlexWrapperWithGap>
            <FlexWrapperWithGap>
                <Button onClick={isEditing.setTrue}>
                    <Pencil1Icon />
                </Button>
                <Button appearance={ButtonAppearance.Danger} onClick={onItemDelete}>
                    <TrashIcon />
                </Button>
            </FlexWrapperWithGap>
        </FlexWrapperWithGap>
    );
};
