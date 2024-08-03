import SecondSection from "./module/landing-page/SecondSection";
import FirstSection from "./module/landing-page/FirstSection";
import CallToAction from "./module/CTA";
import SkillSets from "./module/landing-page/skill-sets";
import siteMetadata from "@/lib/utility/siteMetadata";
import Projects from "./module/landing-page/projects";

export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": siteMetadata.title,
    "description": siteMetadata.description,
    "image": siteMetadata.siteUrl + siteMetadata.socialBanner,
    "author": [{
      "@type": "Person",
      "name": siteMetadata.author,
      "url": siteMetadata.siteUrl
    }]

  };
  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-gradient max-w-full grid">
        <div className="main-content container-px p-4">
          <FirstSection />
          <SecondSection />
        </div>
        <div className="grid items-center mx-4 sm:mx-16 my-4 lg:hidden bg-gradient rounded-lg shadow-md ">
          <CallToAction />
        </div>
      </main>
    </>
  );
}
