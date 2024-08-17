"use client"
import TypingText, { TitleText } from "../TypingText";
import { workData } from "@/lib/utility/constants";
import WorkCard from "./WorkCard";
import React from "react";
import { StaggerContainer } from "../AnimatedContainer";

const WorkSection = () => {
    const [active, setActive] = React.useState<string>('work-1');

 

  return (
    <section className="px-6 py-12 sm:px-16 xs:px-8">
        <StaggerContainer
        className='flex flex-col mx-auto lg:w-[80%] w-[100%]'
        viewport={{ once:true, amount:0.25 }}>
            <TypingText text="| My Projects"textStyle="text-center" />
            <TitleText text="Explore" textStyle="text-start"/>
            <div className="mt-[50px] flex lg:flex-row flex-col card-container gap-5">
                {
                    workData.map((work, index)=>(
                        <WorkCard key={index} workCardProp={{work, index, active} } setActive={setActive}/>
                    ))
                
                }
            </div>
        </StaggerContainer>

    </section>
  )
}

export default WorkSection;