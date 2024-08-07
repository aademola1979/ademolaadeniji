import Card from "./Card";
import CardWrapper from "./CardWrapper";



const FrontendFrameworkAndLibraries = () => {
    const frontendTools = [

        {
            name: "HTML5",
            image: "/images/frontend-tools/html5.svg",
        },

        {
            name: "CSS",
            image: "/images/frontend-tools/css.svg",
        },

        {
            name: "HeadlessUI",
            image: "/images/frontend-tools/headlessui.jpg",

        },

        {
            name: "ShadCN",
            image: "/images/frontend-tools/shadcn.png",

        },
        {
            name: "Nextjs",
            image: "/images/frontend-tools/next.svg",

        },
        {
            name: "Reactjs",
            image: "/images/frontend-tools/react.svg",

        },
        {
            name: "TailwindCSS",
            image: "/images/frontend-tools/tailwindcss.webp",

        },

        {
            name:"Redux",
            image:"images/frontend-tools/redux.svg"
        }
    
    ];


    return (
       
        <CardWrapper title="Frontend Tools">
            {
                frontendTools.map((tool, i) => (

                    <Card key={i} tool={tool} />
                ))
            }
        </CardWrapper>
    )
}

export default FrontendFrameworkAndLibraries