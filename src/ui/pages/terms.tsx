import React from "react";
import { Flex, Text, Container, Box, ContentWrapper } from "ui/atoms";
import { Page } from "ui/molecules";
import { COLORS } from "config/colors";
// import { WINDOW_SIZES } from "config/dimensions";
// import contractData from "assets/json/contracts.json";

const Terms = () => {
  return (
    <Page>
      <Box padding={42} backgroundColor={COLORS.DARK_THEME_BLACK} />
      <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
        <Container>
          <Box padding={60}></Box>
          <Box paddingHorizontal={20} paddingVertical={15}>
            <Flex flexDirection="column" alignItems="center" gap={20}>
              <Text center type="title" fontWeight={600}>
                Terms of Service
              </Text>
              <Box
                maxWidth={1280}
                backgroundColor={COLORS.DARK_THEME_GREY_BACKGROUND}
                paddingVertical={50}
                paddingHorizontal={80}
              >
                <Text type="subtitle" fontWeight={600}>
                  INTRODUCTION
                </Text>
                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  These Terms of Use constitute a legally binding agreement made
                  between you, whether personally or on behalf of an entity
                  (“you”) and PROOF AUDIT (“PROOF,” “we,” “us,” or “our”),
                  concerning your access to and use of the
                  https://www.proofaudit.com/ website as well as any other media
                  form, media channel, mobile website or mobile application
                  related, linked, or otherwise connected thereto (collectively,
                  the “Site”). We are registered in Dubai, United Arab Emirates
                  and have our registered office at Building A2 IFZA Business
                  Park Dubai Silicon Oasis, Dubai, UAE. You agree that by
                  accessing the Site, you have read, understood, and agreed to
                  be bound by all of these Terms of Use. IF YOU DO NOT AGREE
                  WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY
                  PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE
                  IMMEDIATELY.
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  Supplemental terms and conditions or documents that may be
                  posted on the Site from time to time are hereby expressly
                  incorporated herein by reference. We reserve the right, in our
                  sole discretion, to make changes or modifications to these
                  Terms of Use from time to time. We will alert you about any
                  changes by updating the “Last updated” date of these Terms of
                  Use, and you waive any right to receive specific notice of
                  each such change. Please ensure that you check the applicable
                  Terms every time you use our Site so that you understand which
                  Terms apply. You will be subject to, and will be deemed to
                  have been made aware of and to have accepted, the changes in
                  any revised Terms of Use by your continued use of the Site
                  after the date such revised Terms of Use are posted.
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  The information provided on the Site is not intended for
                  distribution to or use by any person or entity in any
                  jurisdiction or country where such distribution or use would
                  be contrary to law or regulation or which would subject us to
                  any registration requirement within such jurisdiction or
                  country. Accordingly, those persons who choose to access the
                  Site from other locations do so on their own initiative and
                  are solely responsible for compliance with local laws, if and
                  to the extent local laws are applicable.
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  The Site is intended for users who are at least 18 years old.
                  Persons under the age of 18 are not permitted to use or
                  register for the Site.
                </Text>

                <Box padding={10} />
                <Text type="subtitle" fontWeight={600}>
                  INTELLECTUAL PROPERTY RIGHTS
                </Text>
                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  Unless otherwise indicated, the Site is our proprietary
                  property and all source code, databases, functionality,
                  software, website designs, audio, video, text, photographs,
                  and graphics on the Site (collectively, the “Content”) and the
                  trademarks, service marks, and logos contained therein (the
                  “Marks”) are owned or controlled by us or licensed to us, and
                  are protected by copyright and trademark laws and various
                  other intellectual property rights and unfair competition laws
                  of the United Arab Emirates, international copyright laws, and
                  international conventions. The Content and the Marks are
                  provided on the Site “AS IS” for your information and personal
                  use only. Except as expressly provided in these Terms of Use,
                  no part of the Site and no Content or Marks may be copied,
                  reproduced, aggregated, republished, uploaded, posted,
                  publicly displayed, encoded, translated, transmitted,
                  distributed, sold, licensed, or otherwise exploited for any
                  commercial purpose whatsoever, without our express prior
                  written permission.
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  Provided that you are eligible to use the Site, you are
                  granted a limited license to access and use the Site and to
                  download or print a copy of any portion of the Content to
                  which you have properly gained access solely for your
                  personal, non-commercial use. We reserve all rights not
                  expressly granted to you in and to the Site, the Content and
                  the Marks.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  USER REPRESENTATIONS
                </Text>
                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  By using the Site, you represent and warrant that: (1) all
                  registration information you submit will be true, accurate,
                  current, and complete; (2) you will maintain the accuracy of
                  such information and promptly update such registration
                  information as necessary; (3) you have the legal capacity and
                  you agree to comply with these Terms of Use; (4) you are not a
                  minor in the jurisdiction in which you reside; (5) you will
                  not access the Site through automated or non-human means,
                  whether through a bot, script, or otherwise; (6) you will not
                  use the Site for any illegal or unauthorized purpose; and (7)
                  your use of the Site will not violate any applicable law or
                  regulation.
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  If you provide any information that is untrue, inaccurate, not
                  current, or incomplete, we have the right to suspend or
                  terminate your account and refuse any and all current or
                  future use of the Site (or any portion thereof).
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  PROHIBITED ACTIVITIES
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  You may not access or use the Site for any purpose other than
                  that for which we make the Site available. The Site may not be
                  used in connection with any commercial endeavors except those
                  that are specifically endorsed or approved by us.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  USER GENERATED CONTRIBUTIONS
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  The Site does not offer users to submit or post content. We
                  may provide you with the opportunity to create, submit, post,
                  display, transmit, perform, publish, distribute, or broadcast
                  content and materials to us or on the Site, including but not
                  limited to text, writings, video, audio, photographs,
                  graphics, comments, suggestions, or personal information or
                  other material (collectively, “Contributions”). Contributions
                  may be viewable by other users of the Site and through
                  third-party websites. As such, any Contributions you transmit
                  may be treated in accordance with the Site Privacy Policy.
                  When you create or make available any Contributions, you
                  thereby represent and warrant that:
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  Any use of the Site in violation of the foregoing violates
                  these Terms of Use and may result in, among other things,
                  termination or suspension of your rights to use the Site.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  CONTRIBUTION LICENSE
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  You and the Site agree that we may access, store, process, and
                  use any information and personal data that you provide
                  following the terms of the Privacy Policy and your choices
                  (including settings).
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  By submitting suggestions or other feedback regarding the
                  Site, you agree that we can use and share such feedback for
                  any purpose without compensation to you.
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  We do not assert any ownership over your Contributions. You
                  retain full ownership of all of your Contributions and any
                  intellectual property rights or other proprietary rights
                  associated with your Contributions. We are not liable for any
                  statements or representations in your Contributions provided
                  by you in any area on the Site. You are solely responsible for
                  your Contributions to the Site and you expressly agree to
                  exonerate us from any and all responsibility and to refrain
                  from any legal action against us regarding your Contributions.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  SUBMISSIONS
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  You acknowledge and agree that any questions, comments,
                  suggestions, ideas, feedback, or other information regarding
                  the Site (“Submissions”) provided by you to us are
                  non-confidential and shall become our sole property. We shall
                  own exclusive rights, including all intellectual property
                  rights, and shall be entitled to the unrestricted use and
                  dissemination of these Submissions for any lawful purpose,
                  commercial or otherwise, without acknowledgment or
                  compensation to you. You hereby waive all moral rights to any
                  such Submissions, and you hereby warrant that any such
                  Submissions are original with you or that you have the right
                  to submit such Submissions. You agree there shall be no
                  recourse against us for any alleged or actual infringement or
                  misappropriation of any proprietary right in your Submissions.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  THIRD-PARTY WEBSITE AND CONTENT
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  The Site may contain (or you may be sent via the Site) links
                  to other websites (“Third-Party Websites”) as well as
                  articles, photographs, text, graphics, pictures, designs,
                  music, sound, video, information, applications, software, and
                  other content or items belonging to or originating from third
                  parties (“Third-Party Content”). Such Third-Party Websites and
                  Third-Party Content are not investigated, monitored, or
                  checked for accuracy, appropriateness, or completeness by us,
                  and we are not responsible for any Third-Party Websites
                  accessed through the Site or any Third-Party Content posted
                  on, available through, or installed from the Site, including
                  the content, accuracy, offensiveness, opinions, reliability,
                  privacy practices, or other policies of or contained in the
                  Third-Party Websites or the Third-Party Content. Inclusion of,
                  linking to, or permitting the use or installation of any
                  Third-Party Websites or any Third-Party Content does not imply
                  approval or endorsement thereof by us. If you decide to leave
                  the Site and access the Third-Party Websites or to use or
                  install any Third-Party Content, you do so at your own risk,
                  and you should be aware these Terms of Use no longer govern.
                  You should review the applicable terms and policies, including
                  privacy and data gathering practices, of any website to which
                  you navigate from the Site or relating to any applications you
                  use or install from the Site. Any purchases you make through
                  Third-Party Websites will be through other websites and from
                  other companies, and we take no responsibility whatsoever in
                  relation to such purchases which are exclusively between you
                  and the applicable third party. You agree and acknowledge that
                  we do not endorse the products or services offered on
                  Third-Party Websites and you shall hold us harmless from any
                  harm caused by your purchase of such products or services.
                  Additionally, you shall hold us harmless from any losses
                  sustained by you or harm caused to you relating to or
                  resulting in any way from any Third-Party Content or any
                  contact with Third-Party Websites.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  SITE MANAGEMENT
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  We reserve the right, but not the obligation, to: (1) monitor
                  the Site for violations of these Terms of Use; (2) take
                  appropriate legal action against anyone who, in our sole
                  discretion, violates the law or these Terms of Use, including
                  without limitation, reporting such user to law enforcement
                  authorities; (3) in our sole discretion and without
                  limitation, refuse, restrict access to, limit the availability
                  of, or disable (to the extent technologically feasible) any of
                  your Contributions or any portion thereof; (4) in our sole
                  discretion and without limitation, notice, or liability, to
                  remove from the Site or otherwise disable all files and
                  content that are excessive in size or are in any way
                  burdensome to our systems; and (5) otherwise manage the Site
                  in a manner designed to protect our rights and property and to
                  facilitate the proper functioning of the Site.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  TERM AND TERMINATION
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  These Terms of Use shall remain in full force and effect while
                  you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF
                  THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE
                  DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND
                  USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO
                  ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT
                  LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
                  COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE
                  LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION
                  IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR
                  INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN
                  OUR SOLE DISCRETION.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  MODIFICATIONS AND INTERRUPTIONS
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  We reserve the right to change, modify, or remove the contents
                  of the Site at any time or for any reason at our sole
                  discretion without notice. However, we have no obligation to
                  update any information on our Site. We also reserve the right
                  to modify or discontinue all or part of the Site without
                  notice at any time. We will not be liable to you or any third
                  party for any modification, price change, suspension, or
                  discontinuance of the Site.
                </Text>

                <Box padding={7} />
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  We cannot guarantee the Site will be available at all times.
                  We may experience hardware, software, or other problems or
                  need to perform maintenance related to the Site, resulting in
                  interruptions, delays, or errors. We reserve the right to
                  change, revise, update, suspend, discontinue, or otherwise
                  modify the Site at any time or for any reason without notice
                  to you. You agree that we have no liability whatsoever for any
                  loss, damage, or inconvenience caused by your inability to
                  access or use the Site during any downtime or discontinuance
                  of the Site. Nothing in these Terms of Use will be construed
                  to obligate us to maintain and support the Site or to supply
                  any corrections, updates, or releases in connection therewith.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  GOVERNING LAW
                </Text>

                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  These Terms of Use and your use of the Site are governed by
                  and construed in accordance with the laws of the Emirate of
                  Dubai applicable to agreements made and to be entirely
                  performed within the Emirate of Dubai, without regard to its
                  conflict of law principles.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  CORRECTIONS
                </Text>

                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  There may be information on the Site that contains
                  typographical errors, inaccuracies, or omissions, including
                  descriptions, pricing, availability, and various other
                  information. We reserve the right to correct any errors,
                  inaccuracies, or omissions and to change or update the
                  information on the Site at any time, without prior notice.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  LIMITATIONS OF LIABILITY
                </Text>

                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                  LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                  CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                  DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
                  OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE
                  HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
                  LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF
                  THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE
                  LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX
                  (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING OR $1.00
                  USD. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW
                  LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR
                  LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU,
                  SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT
                  APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  INDEMNIFICATION
                </Text>

                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  You agree to defend, indemnify, and hold us harmless,
                  including our subsidiaries, affiliates, and all of our
                  respective officers, agents, partners, and employees, from and
                  against any loss, damage, liability, claim, or demand,
                  including reasonable attorneys’ fees and expenses, made by any
                  third party due to or arising out of: (1) use of the Site; (2)
                  breach of these Terms of Use; (3) any breach of your
                  representations and warranties set forth in these Terms of
                  Use; (4) your violation of the rights of a third party,
                  including but not limited to intellectual property rights; or
                  (5) any overt harmful act toward any other user of the Site
                  with whom you connected via the Site. Notwithstanding the
                  foregoing, we reserve the right, at your expense, to assume
                  the exclusive defense and control of any matter for which you
                  are required to indemnify us, and you agree to cooperate, at
                  your expense, with our defense of such claims. We will use
                  reasonable efforts to notify you of any such claim, action, or
                  proceeding which is subject to this indemnification upon
                  becoming aware of it.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                </Text>

                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  Visiting the Site, sending us emails, and completing online
                  forms constitute electronic communications. You consent to
                  receive electronic communications, and you agree that all
                  agreements, notices, disclosures, and other communications we
                  provide to you electronically, via email and on the Site,
                  satisfy any legal requirement that such communication be in
                  writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
                  CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC
                  DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS
                  INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive
                  any rights or requirements under any statutes, regulations,
                  rules, ordinances, or other laws in any jurisdiction which
                  require an original signature or delivery or retention of
                  non-electronic records, or to payments or the granting of
                  credits by any means other than electronic means.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  MISCELLANEOUS
                </Text>

                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  These Terms of Use and any policies or operating rules posted
                  by us on the Site or in respect to the Site constitute the
                  entire agreement and understanding between you and us. Our
                  failure to exercise or enforce any right or provision of these
                  Terms of Use shall not operate as a waiver of such right or
                  provision. These Terms of Use operate to the fullest extent
                  permissible by law. We may assign any or all of our rights and
                  obligations to others at any time. We shall not be responsible
                  or liable for any loss, damage, delay, or failure to act
                  caused by any cause beyond our reasonable control. If any
                  provision or part of a provision of these Terms of Use is
                  determined to be unlawful, void, or unenforceable, that
                  provision or part of the provision is deemed severable from
                  these Terms of Use and does not affect the validity and
                  enforceability of any remaining provisions. There is no joint
                  venture, partnership, employment or agency relationship
                  created between you and us as a result of these Terms of Use
                  or use of the Site. You agree that these Terms of Use will not
                  be construed against us by virtue of having drafted them. You
                  hereby waive any and all defenses you may have based on the
                  electronic form of these Terms of Use and the lack of signing
                  by the parties hereto to execute these Terms of Use.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  CONTACT US
                </Text>

                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  In order to resolve a complaint regarding the Site or to
                  receive further information regarding use of the Site, please
                  contact us at:
                </Text>

                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  Proof Audit
                </Text>
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  Building A2 IFZA Business Park
                </Text>
                <Box padding={3} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  Dubai Silicon Oasis, Dubai, UAE
                </Text>
              </Box>
              <Box padding={50} />
            </Flex>
          </Box>
        </Container>
      </ContentWrapper>
    </Page>
  );
};

export default Terms;
