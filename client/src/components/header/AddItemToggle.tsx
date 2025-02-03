import { useBoolean } from "../../hooks/useBoolean";
import { Form } from "../form";
import { RoundedButton } from "../buttons/RoundedButton";
import { ButtonAppearance } from "../buttons/Button";
import { PlusIcon } from "@radix-ui/react-icons";

interface IProps {
    onSubmit: (label: string) => void;
}

export const AddItemToggle = ({ onSubmit }: IProps) => {
    const isAdding = useBoolean(false);

    const handleSubmit = (label: string) => {
        onSubmit(label);
        isAdding.setFalse();
    };

    if (isAdding.value) {
        return <Form initialValue="" onSubmit={handleSubmit} onCancel={isAdding.setFalse} />;
    }

    return <RoundedButton appearance={ButtonAppearance.Success} onClick={isAdding.setTrue} icon={<PlusIcon />} />;
};
