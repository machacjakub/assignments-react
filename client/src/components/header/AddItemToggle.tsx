import { useBoolean } from "hooks";
import { PlusIcon } from "@radix-ui/react-icons";
import { ButtonAppearance, RoundedButton, Form } from "components";

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

    return <RoundedButton appearance={ButtonAppearance.Primary} onClick={isAdding.setTrue} icon={<PlusIcon />} />;
};
