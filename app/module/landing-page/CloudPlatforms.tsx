import Card from "./Card"
import CardWrapper from "./CardWrapper"


const CloudPlatforms = () => {
    const platforms = [
        {
            name:"AWS",
            image:"/images/cloud/amazon.svg",
        },

        {
            name:"Vercel",
            image:"/images/cloud/vercel.svg",
        },

        {
            name:"Render",
            image:"/images/cloud/render.png",
        },

        {
            name:"Kaggle",
            image:"/images/cloud/kaggle.png",
        },

        {
            name:"HuggingFace",
            image:"/images/cloud/huggingface.svg",
        }
    ]
  return (
    <CardWrapper title="Cloud Platforms">
        {
            platforms.map((tool, i)=>(
                <Card key={i} tool={tool}/>
            ))
        }

    </CardWrapper>
  )
}

export default CloudPlatforms