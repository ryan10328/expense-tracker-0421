import { View, Text, TextInput } from "react-native";
import Button from "../ui/Button";
import { Expense } from "../types";
import { format } from "date-fns";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type ExpenseFormProps = {
  onCancel: () => void;
  onSubmit: (data: Expense) => void;
  defaultValues?: Expense;
  submittionLabel: string;
};

const schema = z.object({
  amount: z.coerce.number().gt(0),
  date: z.string().date(),
  description: z.string().min(1).max(200),
});

type ExpenseFormSchemaType = z.infer<typeof schema>;

const ExpenseForm = ({
  onCancel,
  onSubmit,
  defaultValues,
  submittionLabel,
}: ExpenseFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ExpenseFormSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      amount: defaultValues ? defaultValues.amount : 0,
      date: defaultValues ? defaultValues.date : "",
      description: defaultValues ? defaultValues.description : "",
    },
    mode: "onChange",
  });

  const performSubmit = (data: Expense) => {
    onSubmit(data);
  };

  const onError = (err: unknown) => {
    console.log(err);
  };

  return (
    <View className="mt-[80px] mb-4">
      <Text className="text-2xl font-bold text-white my-6 text-center">
        Your Expense
      </Text>
      <View className="flex-row justify-between">
        <View className="mx-1 my-2 flex-1">
          <Text className="text-sm text-indigo-100 mb-1">Amount</Text>
          <Controller
            name="amount"
            control={control}
            rules={{
              required: true,
              min: 1,
            }}
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <TextInput
                  className={`${[
                    "bg-indigo-100",
                    "text-indigo-700",
                    "p-[6px]",
                    "rounded-md",
                    "text-lg",
                  ].join(" ")}`}
                  keyboardType="decimal-pad"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value?.toString()}
                />
              );
            }}
          />
          {errors?.amount && (
            <Text className="text-red-600 font-medium mt-2">
              {errors?.amount?.message}
            </Text>
          )}
        </View>
        <View className="mx-1 my-2 flex-1">
          <Text className="text-sm text-indigo-100 mb-1">Date</Text>
          <Controller
            name="date"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <TextInput
                  className={`${[
                    "bg-indigo-100",
                    "text-indigo-700",
                    "p-[6px]",
                    "rounded-md",
                    "text-lg",
                  ].join(" ")}`}
                  maxLength={10}
                  placeholder="YYYY-MM-DD"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              );
            }}
          />
          {errors?.date && (
            <Text className="text-red-600 font-medium mt-2">
              {errors?.date?.message}
            </Text>
          )}
        </View>
      </View>
      <View className="mx-1 my-2">
        <Text className="text-sm text-indigo-100 mb-1">Description</Text>
        <Controller
          name="description"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <TextInput
                className={`${[
                  "bg-indigo-100",
                  "text-indigo-700",
                  "p-[6px]",
                  "rounded-md",
                  "text-lg",
                  "min-h-[100px]",
                  "align-top",
                ].join(" ")}`}
                multiline={true}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            );
          }}
        />
        {errors?.description && (
          <Text className="text-red-600 font-medium mt-2">
            {errors?.description?.message}
          </Text>
        )}
      </View>

      <View className="flex-row justify-center items-center">
        <Button mode="flat" onPress={onCancel} className="min-w-[120px] mx-2">
          Cancel
        </Button>
        <Button
          mode="flat"
          onPress={handleSubmit(performSubmit, onError)}
          className="min-w-[120px] mx-2"
          disabled={!isValid}
        >
          {submittionLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;
