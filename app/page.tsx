import SecondSection from "./module/landing-page/SecondSection";
import FirstSection from "./module/landing-page/FirstSection";


export default function Home() {
  return (
    <main className="main-content container-px grid gap-[2rem] lg:py-[3rem]  min-h-screen !max-w-[100vw]">
     <FirstSection />
     <SecondSection />
    </main>
  );
}
