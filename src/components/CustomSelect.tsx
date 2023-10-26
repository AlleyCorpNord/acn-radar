import { ReactNode } from "react";
import { Combobox, Group, Input, InputBase, useCombobox } from "@mantine/core";
import styles from "./components.module.css";

export default function CustomSelect<T extends (any) => ReactNode>({
  placeholder,
  value,
  onChange,
  renderOption,
  data,
}: {
  placeholder?: string;
  value?: string | null;
  onChange: (value?: string) => void;
  renderOption: T;
  data: {
    value: string;
    label: string;
    accessory?: ReactNode;
    color?: string;
  }[];
}) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const selected = data.find((item) => item.value === value);

  const clearButton = !!value && (
    <Combobox.ClearButton
      onClear={() => {
        onChange();
      }}
    />
  );

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        onChange(val === value ? undefined : val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          pointer
          radius={"md"}
          rightSection={clearButton || <Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
        >
          {!!selected ? (
            <Group align={"center"} gap={4}>
              {selected?.accessory}
              {selected?.label}
            </Group>
          ) : (
            <Input.Placeholder>{placeholder}</Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {data.map((dataProps) => (
            <Combobox.Option
              value={dataProps.value}
              key={dataProps.value}
              className={value === dataProps.value ? styles.option : undefined}
            >
              {renderOption(dataProps)}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
