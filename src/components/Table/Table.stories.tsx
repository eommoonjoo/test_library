import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MockTable from "./MockTable";

export default {
  title: "Paycrux/Table",
  component: MockTable,
} as ComponentMeta<typeof MockTable>;

export const Secondary: ComponentStory<typeof MockTable> = () => <MockTable />;
