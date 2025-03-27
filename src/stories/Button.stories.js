import Button from "../components/button/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
    label: { control: "text" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["small", "medium", "large"] },
    fullWidth: { control: "boolean" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  variant: "primary",
  disabled: false,
  size: "medium",
  fullWidth: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
  disabled: false,
  size: "medium",
  fullWidth: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button",
  variant: "primary",
  disabled: true,
  size: "medium",
  fullWidth: false,
};

export const Large = Template.bind({});
Large.args = {
  label: "Large Button",
  variant: "primary",
  size: "large",
  fullWidth: false,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: "Full Width Button",
  variant: "primary",
  size: "medium",
  fullWidth: true,
};