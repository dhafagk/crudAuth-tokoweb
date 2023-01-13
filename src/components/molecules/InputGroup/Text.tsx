import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";
import { InputProps } from "@chakra-ui/react";
import { ControllerRenderProps } from "react-hook-form";

export interface InputInterfaceProps extends InputProps {
  children?: React.ReactNode;
  controlRender?: ControllerRenderProps;
}

interface MoleculeInputGroupTextProps extends FormControlProps {
  component: React.ElementType<InputInterfaceProps>;
  name: string;
  label: string;
  helperText?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  htmlFor?: string;
  type?: string;
  defaultValue?: string;
}

const MoleculeInputGroupText: React.FC<MoleculeInputGroupTextProps> = (
  props
) => {
  const {
    htmlFor,
    label,
    helperText,
    isDisabled,
    isInvalid,
    isRequired,
    type,
    name,
    component,
    ...rest
  } = props;

  const methods = useFormContext();

  const AtomComponent: React.ElementType<InputInterfaceProps> = component;

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field, fieldState }) => {
        return (
          <FormControl
            isDisabled={isDisabled}
            isRequired={isRequired}
            isInvalid={fieldState.isTouched && fieldState.invalid}
            {...rest}
          >
            <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
            <AtomComponent name={name} type={type} controlRender={field} />
            <FormErrorMessage>{fieldState.error?.message}</FormErrorMessage>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        );
      }}
    />
  );
};

export default MoleculeInputGroupText;
