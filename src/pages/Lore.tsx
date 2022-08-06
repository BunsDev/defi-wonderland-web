import styled, { css } from "styled-components";

import {
  ApproachSection,
  Footer,
  HeroSection,
  PageContent,
} from "@/components/app";
import {
  Ball,
  // Button,
  Ring,
  Section,
  SectionArticle,
} from "@/components/common";

const sectionPadding = "3rem 0";

const LoreSectionArticle = styled(SectionArticle)``;

const LoreSection = styled(Section)`
  width: calc(var(--page-max-width) + 12rem);
  max-width: 100%;
  grid-gap: 4.6rem;

  @media screen and (max-width: 1200px) {
    flex-direction: column;

    ${LoreSectionArticle} {
      order: 1;
    }
  }

  @media screen and (max-width: 500px) {
    padding: ${sectionPadding};
  }
`;

const sectionMediaStyles = css`
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

const LeftSection = styled(LoreSection)`
  justify-content: flex-start;

  ${sectionMediaStyles}
`;
const RightSection = styled(LoreSection)`
  justify-content: flex-end;

  ${sectionMediaStyles}
`;

const StyledApproachSection = styled(ApproachSection)`
  padding: ${sectionPadding};
`;

// const SectionBackground = styled.div<{ type: "1" | "2" | "3" | "4" }>`
//   position: absolute;

//   img {
//     width: 50%;
//     height: auto;
//     background-image: url("/img/lore/001_grad.jpg");
//     background-repeat: no-repeat;
//   }
// `;

export function Lore() {
  return (
    <PageContent>
      <Ball />

      <HeroSection />

      <LeftSection>
        <LoreSectionArticle title="WHO WE ARE">
          <div>
            <span>
              We were beginning to get very tired of sitting on the sidelines,
              and of having nothing to do: once or twice we peeped into what
              Paradigm was reading, but it had no pictures or conversations in
              it,“ and what is the use of a book,” we thought, “ without
              pictures or conversations?”
            </span>

            <span>
              So we were considering in our own mind, (as well as we could, for
              the hot day made us feel very sleepy and stupid) whether the
              pleasure of making a daisy-chain would be worth the trouble of
              getting up and picking the daisies, when suddenly a white rabbit
              with pink eyes ran close by us.
            </span>

            <span>
              We decided to follow him, a small group of contributors with
              diverse backgrounds in software engineering, game theory, and
              venture capital that decided to join forces and go down the rabbit
              hole. We are now the fastest growing activist fund in the web3
              ecosystem, and this adventure is just about to begin.
            </span>

            {/* <Button>Team</Button> */}
          </div>
        </LoreSectionArticle>
        <Ring type="1" />

        {/* <SectionBackground type="1" /> */}
      </LeftSection>

      <RightSection>
        <Ring type="2" />

        <LoreSectionArticle title="OUR MISSION">
          <div>
            <span>
              Wonderland is an activist fund, as such, our goal is to join
              forces with the best builders in the world to shape the future of
              the web. We believe this future needs to be open-source,
              permissionless, and decentralized, and we strive towards that
              goal.
            </span>

            {/* <Button>Portfolio</Button> */}
          </div>
        </LoreSectionArticle>
      </RightSection>

      <LeftSection>
        <LoreSectionArticle title="OUR VALUES">
          <div>
            <span>
              We're entirely bonkers - but I'll tell you a secret - all the best
              people are.
            </span>

            <span>
              We believe in this ecosystem and its ethos. We stand behind its
              values and will work to see them reach the masses.
            </span>

            <span>
              Decentralized and censorship-resistant systems are not a
              nice-to-have, but a must, for it's the only way to ensure free
              speech and financial freedom.
            </span>

            {/* <Button>Join us</Button> */}
          </div>
        </LoreSectionArticle>

        <Ring type="1" />
      </LeftSection>

      <StyledApproachSection />

      <Footer />
    </PageContent>
  );
}
