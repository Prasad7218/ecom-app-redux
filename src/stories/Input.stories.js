import React from "react";
import Input from "../components/input/Input";

export default {
    title: "Components/Input",
    component: Input,
    argTypes: {
        type: { control: "text" },
        placeholder: { control: "text" },
        value: { control: "text" },
        error: { control: "text" },
        size: { control: { type: "radio", options: ["small", "medium", "large"] } },
        disabled: { control: "boolean" },
    },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: "Enter text...",
    value: "",
    disabled: false,
    size: "medium",
};

export const WithError = Template.bind({});
WithError.args = {
    placeholder: "Enter text...",
    value: "Invalid input",
    error: "This field is required",
    size: "medium",
};

export const Disabled = Template.bind({});
Disabled.args = {
    placeholder: "Cannot enter text",
    value: "",
    disabled: true,
    size: "medium",
};

export const Small = Template.bind({});
Small.args = {
    placeholder: "Small input",
    size: "small",
};

export const Large = Template.bind({});
Large.args = {
    placeholder: "Large input",
    size: "large",
};
