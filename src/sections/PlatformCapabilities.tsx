import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { TwoColumnFeatures } from "../components/TwoColumnFeatures";
import {
  DUTYFLEX_MOBILE_APP_IMAGE_URL,
  DUTYFLEX_WEB_APP_IMAGE_URL,
  MOBILE_APP_IMAGE_CLASSES,
  WEB_APP_IMAGE_CLASSES,
} from "../data/assets";
import {
  capabilityVisualHighlights,
  capabilityVisualStats,
  platformCapabilities,
} from "../data/landing";

export function PlatformCapabilities() {
  return (
    <section id="capabilities" className="scroll-mt-28 py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Platform Capabilities"
            title="Built for both central command and field execution."
            description="DutyFlex gives operations leaders a complete web command center while equipping security teams with fast, verified mobile workflows."
          />
        </Reveal>

        <div className="mt-12 space-y-12">
          <Reveal>
            <TwoColumnFeatures
              heading={platformCapabilities.web.title}
              description={platformCapabilities.web.description}
              points={platformCapabilities.web.points}
              visualHighlights={capabilityVisualHighlights.web}
              visualStats={capabilityVisualStats.web}
              visualTitle="Web app"
              imageSrc={DUTYFLEX_WEB_APP_IMAGE_URL}
              imageAlt="DutyFlex web dashboard interface"
              imageClassName={WEB_APP_IMAGE_CLASSES}
              imageSide="right"
            />
          </Reveal>

          <Reveal>
            <TwoColumnFeatures
              heading={platformCapabilities.mobile.title}
              description={platformCapabilities.mobile.description}
              points={platformCapabilities.mobile.points}
              visualHighlights={capabilityVisualHighlights.mobile}
              visualStats={capabilityVisualStats.mobile}
              visualTitle="Mobile app"
              imageSrc={DUTYFLEX_MOBILE_APP_IMAGE_URL}
              imageAlt="DutyFlex mobile app interface"
              imageClassName={MOBILE_APP_IMAGE_CLASSES}
              imageSide="left"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
