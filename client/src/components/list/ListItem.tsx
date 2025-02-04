import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React from "react";
import styled from "styled-components";

import { Button, ButtonAppearance, Checkbox, FlexWrapperWithGap, Form } from "components";
import { useBoolean } from "hooks";

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
    const isHovering = useBoolean(false);

    const handleSubmit = (label: string): void => {
        isEditing.setFalse();
        onItemLabelEdit(label);
    };

    if (isEditing.value) {
        return <Form initialValue={label} onCancel={isEditing.setFalse} onSubmit={handleSubmit} />;
    }

    return (
        <FlexWrapperWithGap onMouseOver={isHovering.setTrue} onMouseLeave={isHovering.setFalse}>
            <FlexWrapperWithGap>
                <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
                <Label>{label}</Label>
            </FlexWrapperWithGap>
            {isHovering.value && (
                <FlexWrapperWithGap>
                    <Button onClick={isEditing.setTrue} icon={<Pencil1Icon />} />
                    <Button appearance={ButtonAppearance.Danger} onClick={onItemDelete} icon={<TrashIcon />} />
                </FlexWrapperWithGap>
            )}
        </FlexWrapperWithGap>
    );
};
