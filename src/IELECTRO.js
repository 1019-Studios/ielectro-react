import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "ie-components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "ie-components/features/ielectro-features.js";
import MainFeature from "ie-components/features/TwoColWithButton.js";
import FAQ from "ie-components/faqs/ielectro-faqs.js";
import Footer from "ie-components/footers/ielectro-Footer.js";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg"
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg"
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg"

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Features /> 
      <MainFeature 
        subheading="Cell Phone Repair"
        heading="IPhone and Android Repairs in store"
        description = "Fast and reliable service, water damage, speaker failure, lcd replacement, and more. Call us to hear about all of our services. "
        imageSrc={serverSecureIllustrationImageSrc} 
        primaryButtonText = "Call us 561-420-6471"
        buttonRounded={false}
        textOnLeft={false}
      /> 
      <MainFeature 
        subheading="Networking and Repairs"
        heading="Hardware repair, sever mangement and backup, computer security and more"
        description = "We can help you with PC tune ups, data transfers, virus removal, and more. 
        We are your go to shop for your computer repair needs!
        "
        imageSrc={serverRedundancyIllustrationImageSrc}
      // primaryButtonText = "Learn More",
      //  buttonRounded={false} 
      />
      <MainFeature 
        subheading="Areas we service"
        heading="Areas we service for In-Home Repairs"
        description = " Acreage | Atlantis | Boca Raton | Boynton Beach |
        Delray Beach | Greenacres | Highland Beach |
        Jupiter | Lake Worth | Lantana | Loxahatchee |
        North Palm Beach | Palm Beach Gardens | Palm Beach | Palm Springs |
        Royal Palm Beach | Wellington | West Palm Beach |
    "
        imageSrc={serverSecureIllustrationImageSrc} 
        // primaryButtonText = "Learn More",
        //  buttonRounded={false} 
      /> 
      <MainFeature 
        subheading="Event Planning"
        heading="Need a space for your event?"
        description = "Use our shop, conveniently located near Palm Beach State college and other popular amenities to host a small event.
        Host a business function, yoga class, or more. Contact us for details"
        imageSrc={prototypeIllustrationImageSrc} 
        // primaryButtonText = "Learn More",
        //  buttonRounded={false} 
      /> 
      <FAQ />
      <Footer />
    </AnimationRevealPage>
  );
}
