import { Group, Avatar, Text } from "@mantine/core";
import { ReactNode, forwardRef } from "react";

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  accessory: ReactNode;
  label: string;
  value: string;
}

export const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ accessory, label, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        {accessory}
        <div>
          <Text size="sm">{label}</Text>
        </div>
      </Group>
    </div>
  )
);