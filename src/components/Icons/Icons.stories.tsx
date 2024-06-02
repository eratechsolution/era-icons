import React from "react";
import { IconsData } from "./IconData";
import './icon.css'
// import { Card } from "../../Card/Card";

export default {
    title: "Foundation/Icons",
    parameters: {
    },
    argTypes: {
        size: {
            description: "Font Size",
            control: {
                type: "text",
                options: ["24", "20", "16"],
            },
            defaultValue: "24",
        },
        color: {
            description: "Color Name",
            control: {
                type: "color",
            },
            defaultValue: "#1c2433",
        },
        strokeWidth: {
            description: "Stroke Width (2 suites best)",
            control: {
                type: "number",
            },
            defaultValue: "2",
        },
        customClass: {
            description: "Add custom class",
            control: {
                type: "text",
            },
            defaultValue: "",
        },
    },
};
const Template = ({ ...rest }: any) => {
    const icons: any = IconsData({ ...rest });
    return (

        <div className="inte-icons__wrapper">

            {icons.map((item: any, index: number) => {
                return <>
                    <div className="pixel-icon__item">
                        <div className="pixel-icon__item-inner-wrapper">
                            <div className="pixel-icon__item--wrapper">
                                <span className="pixel-icon">{item.icon}</span>
                                <span className="pixel-icon__name">{item.name}</span>
                            </div>
                        </div>
                    </div>
                </>
            })}

        </div>

    );
};
export const Primary: any = Template.bind({});
