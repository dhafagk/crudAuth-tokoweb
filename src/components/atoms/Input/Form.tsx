import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm, UseFormReturn } from "react-hook-form";

interface FormProps {
  children: (methods: UseFormReturn) => React.ReactNode;
  defaultValues: any;
  onSubmit: (values: any, onResetCallback: () => void) => void;
  validationSchema: any;
}

const Form: React.FC<FormProps> = ({
  onSubmit,
  defaultValues,
  children,
  validationSchema,
}) => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => onSubmit(data, methods.reset))}
      >
        {children(methods)}
      </form>
    </FormProvider>
  );
};

export default Form;
