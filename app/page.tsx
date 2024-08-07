import SecondSection from "./module/landing-page/SecondSection";
import FirstSection from "./module/landing-page/FirstSection";
import CallToAction from "./module/landing-page/CTA"
import siteMetadata from "@/lib/utility/siteMetadata";


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
    <main className="mana-gradient py-4 grid !max-w-full">
        <div className="main-content mb-4 container-px">
          <FirstSection />
          <SecondSection />
        </div> 
        <div className="flex items-center justify-center  h-fit mx-4 my-4 sm:mx-16 lg:hidden rounded-lg bg-white shadow-md">
          <CallToAction />
        </div>
      </main>
    </>
  );
}
