import type { Meta, StoryObj } from "@storybook/react";
import ContactSection from ".";
import { http, HttpResponse } from "msw";

const meta = {
    title: "Marketing/Contact",
    component: ContactSection,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        msw: {
            handlers: {
                submitForm: http.post("/contact/success", () => {
                    return HttpResponse.json({
                         "message": "Subscription successful! Please check your email to confirm."
                    }, {
                        status: 200
                    })
                }),
                submitFormError: http.post("contact/error", () => {
                    return HttpResponse.json({
                        "message": "error"
                    }, {
                        status: 500
                    })
                })
            }
        }
    },
} satisfies Meta<typeof ContactSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Talk to our team",
        description: "We've committed to delivering the support you require to make your experience as smooth as possible.",
        contactDetails: [
            {
                description: "123 Maple Street, Springfield IL, USA",
                icon: "building-line.svg",
            },
            {
                description: "+1 (650) 555-0198",
                icon: "phone-line.svg",
            },
            {
                description: "hello@abstractly",
                icon: "mail-line.svg",
            }
        ],
        form: {
            url: "https://www.greatfrontend.com/api/projects/challenges/contact",
            notification: {
                error: {
                    badge: "Error",
                    message: "Failed to submit. Please ensure your details are correct or try again later.",
                    status: "error",
                },
                success: {
                    badge: "Success",
                    message: "Submission successful! We will get back to you in 3-5 days via email.",
                    status: "success",
                }
            },
            fields: [
                {
                    id: "name",
                    name: "name",
                    label: "Name",
                    renderType: "text",
                    placeholder: "Enter your name",
                    required: true,
                    disabled: false,
                    groupWithNext: true,
                    classes: "gap-2"
                },
                {
                    id: "email",
                    name: "email",
                    label: "Email",
                    renderType: "email",
                    placeholder: "Enter your email",
                    required: true,
                    disabled: false,
                    classes: "gap-2"
                },
                {
                    id: "message",
                    name: "message",
                    label: "Message",
                    renderType: "textarea",
                    placeholder: "Write your message...",
                    characterLimit: 500,
                    required: true,
                    disabled: false,
                    classes: "gap-2 lg:w-full"
                },
                {
                    id: "submit",
                    name: "submit",
                    label: "Submit",
                    renderType: "submit",
                    disabled: false,
                    classes: "gap-10 lg:w-full"
                }
            ],
        }
    }
};

export const SuccessContact: Story = {
    args: {
        title: "Talk to our team",
        description: "We've committed to delivering the support you require to make your experience as smooth as possible.",
        contactDetails: [
            {
                description: "123 Maple Street, Springfield IL, USA",
                icon: "building-line.svg",
            },
            {
                description: "+1 (650) 555-0198",
                icon: "phone-line.svg",
            },
            {
                description: "hello@abstractly",
                icon: "mail-line.svg",
            }
        ],
        form: {
            url: "/contact/success",
            notification: {
                error: {
                    badge: "Error",
                    message: "Failed to submit. Please ensure your details are correct or try again later.",
                    status: "error",
                },
                success: {
                    badge: "Success",
                    message: "Submission successful! We will get back to you in 3-5 days via email.",
                    status: "success",
                }
            },
            fields: [
                {
                    id: "name",
                    name: "name",
                    label: "Name",
                    renderType: "text",
                    placeholder: "Enter your name",
                    required: true,
                    disabled: false,
                    groupWithNext: true,
                    classes: "gap-2"
                },
                {
                    id: "email",
                    name: "email",
                    label: "Email",
                    renderType: "email",
                    placeholder: "Enter your email",
                    required: true,
                    disabled: false,
                    classes: "gap-2"
                },
                {
                    id: "message",
                    name: "message",
                    label: "Message",
                    renderType: "textarea",
                    placeholder: "Write your message...",
                    characterLimit: 500,
                    required: true,
                    disabled: false,
                    classes: "gap-2 lg:w-full"
                },
                {
                    id: "submit",
                    name: "submit",
                    label: "Submit",
                    renderType: "submit",
                    disabled: false,
                    classes: "gap-10 lg:w-full"
                }
            ],
        }
    }
}

export const ErrorContact: Story = {
    args: {
        title: "Talk to our team",
        description: "We've committed to delivering the support you require to make your experience as smooth as possible.",
        contactDetails: [
            {
                description: "123 Maple Street, Springfield IL, USA",
                icon: "building-line.svg",
            },
            {
                description: "+1 (650) 555-0198",
                icon: "phone-line.svg",
            },
            {
                description: "hello@abstractly",
                icon: "mail-line.svg",
            }
        ],
        form: {
            url: "/contact/error",
            notification: {
                error: {
                    badge: "Error",
                    message: "Failed to submit. Please ensure your details are correct or try again later.",
                    status: "error",
                },
                success: {
                    badge: "Success",
                    message: "Submission successful! We will get back to you in 3-5 days via email.",
                    status: "success",
                }
            },
            fields: [
                {
                    id: "name",
                    name: "name",
                    label: "Name",
                    renderType: "text",
                    placeholder: "Enter your name",
                    required: true,
                    disabled: false,
                    groupWithNext: true,
                    classes: "gap-2"
                },
                {
                    id: "email",
                    name: "email",
                    label: "Email",
                    renderType: "email",
                    placeholder: "Enter your email",
                    required: true,
                    disabled: false,
                    classes: "gap-2"
                },
                {
                    id: "message",
                    name: "message",
                    label: "Message",
                    renderType: "textarea",
                    placeholder: "Write your message...",
                    characterLimit: 500,
                    required: true,
                    disabled: false,
                    classes: "gap-2 lg:w-full"
                },
                {
                    id: "submit",
                    name: "submit",
                    label: "Submit",
                    renderType: "submit",
                    disabled: false,
                    classes: "gap-10 lg:w-full"
                }
            ],
        }
    }
}