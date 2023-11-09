import { Group, Badge } from "@mantine/core";
import { forwardRef } from "react";

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  label: string;
  value: string;
  color: string;
}

export const BadgeSelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ color, label, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group wrap={"nowrap"}>
        <Badge variant="filled" color={color}>
          {label}
        </Badge>
      </Group>
    </div>
  ),
);
