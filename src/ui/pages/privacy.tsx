import React from "react";
import {
  Flex,
  Text,
  Container,
  Box,
  ContentWrapper,
} from "ui/atoms";
import { Page } from "ui/molecules";
import { COLORS } from "config/colors";
// import { WINDOW_SIZES } from "config/dimensions";
// import contractData from "assets/json/contracts.json";

const Privacy = () => {
  return (
    <Page>
      <Box padding={42} backgroundColor={COLORS.DARK_THEME_BLACK} />
      <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
        <Container>
          <Box padding={60}></Box>
          <Box paddingHorizontal={20} paddingVertical={15}>
            <Flex flexDirection="column" alignItems="center" gap={20}>
              <Text center type="title" fontWeight={600}>
                Privacy Policy
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
                <Text type="subtitle" justify lineHeight={1.5}>
                  This privacy policy (“Privacy Policy”) describes the
                  collection of personal information by Proof Audit, (“Company,”
                  “we,” “us”, or “our”) from users (“you”, “your”) of our
                  website at www.proofaudit.com (our “Site”) along with our
                  related websites, networks, applications, platforms, and other
                  services provided by us and on which a link to this Privacy
                  Policy is displayed (collectively, our “Service” or
                  “Services”). This Privacy Policy also describes our use and
                  disclosure of such information. This Privacy Policy also
                  describes your rights as a data subject to inquire about your
                  personal information that we process and describes certain
                  rights that you, as the data subject, have regarding this
                  information. Please read this Privacy Policy carefully to
                  understand our practices regarding your personal information
                  and how we will use it. By accepting this Privacy Policy and
                  Terms and Conditions, you agree to our collection, storage,
                  use and disclosure of your personal information as described
                  in this Privacy Policy.
                </Text>
                <Box padding={10} />
                <Text type="subtitle" fontWeight={600}>
                  WHAT INFORMATION DO WE COLLECT?
                </Text>
                <Box padding={7} />
                <Text type="subtitle" fontWeight={600}>
                  Personal information you disclose to us
                </Text>
                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  We collect personal information that you voluntarily provide
                  to us when you register on the Services, express an interest
                  in obtaining information about us or our products and
                  Services, when you participate in activities on the Services,
                  or otherwise when you contact us.
                </Text>
                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  Personal information you disclose to us
                </Text>
                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  The personal information that we collect depends on the
                  context of your interactions with us and the Services, the
                  choices you make, and the products and features you use. The
                  personal information we collect may include the following:
                  names, email addresses, contact preferences.
                </Text>

                {/*------------------------*/}
                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  Sensitive Information
                </Text>
                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  All personal information that you provide to us must be true,
                  complete, and accurate, and you must notify us of any changes
                  to such personal information.
                </Text>

                {/*------------------------*/}
                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  Information automatically collected
                </Text>
                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  We automatically collect certain information when you visit,
                  use, or navigate the Services. This information does not
                  reveal your specific identity (like your name or contact
                  information) but may include device and usage information,
                  such as your IP address, browser and device characteristics,
                  operating system, language preferences, referring URLs, device
                  name, country, location, information about how and when you
                  use our Services, and other technical information. This
                  information is primarily needed to maintain the security and
                  operation of our Services, and for our internal analytics and
                  reporting purposes.
                </Text>
                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  Like many businesses, we also collect information through
                  cookies and similar technologies.
                </Text>
                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  The information we collect includes:
                </Text>
                <Box padding={7} />
                <Box padding="0 0 0 30">
                  <Text type="subtitle" justify lineHeight={1.5}>
                    <Text
                      type="subtitle"
                      justify
                      lineHeight={1.5}
                      italic
                      noWrap
                      category="span"
                    >
                      • Log and Usage Data.&nbsp;
                    </Text>
                    Log and usage data is service-related, diagnostic, usage,
                    and performance information our servers automatically
                    collect when you access or use our Services and which we
                    record in log files. Depending on how you interact with us,
                    this log data may include your IP address, device
                    information, browser type, and settings and information
                    about your activity in the Services (such as the date/time
                    stamps associated with your usage, pages and files viewed,
                    searches, and other actions you take such as which features
                    you use), device event information (such as system activity,
                    error reports (sometimes called “crash dumps”), and hardware
                    settings).
                  </Text>
                  <Text type="subtitle" justify lineHeight={1.5}>
                    <Text
                      type="subtitle"
                      justify
                      lineHeight={1.5}
                      italic
                      noWrap
                      category="span"
                    >
                      • Device Data.&nbsp;
                    </Text>
                    We collect device data such as information about your
                    computer, phone, tablet, or other device you use to access
                    the Services. Depending on the device used, this device data
                    may include information such as your IP address (or proxy
                    server), device and application identification numbers,
                    location, browser type, hardware model, Internet service
                    provider and/or mobile carrier, operating system, and system
                    configuration information.
                  </Text>
                  <Text type="subtitle" justify lineHeight={1.5}>
                    <Text
                      type="subtitle"
                      justify
                      lineHeight={1.5}
                      italic
                      noWrap
                      category="span"
                    >
                      • Location Data.&nbsp;
                    </Text>
                    We collect location data such as information about your
                    device’s location, which can be either precise or imprecise.
                    How much information we collect depends on the type and
                    settings of the device you use to access the Services. For
                    example, we may use GPS and other technologies to collect
                    geolocation data that tells us your current location (based
                    on your IP address). You can opt out of allowing us to
                    collect this information either by refusing access to the
                    information or by disabling your Location setting on your
                    device. However, if you choose to opt out, you may not be
                    able to use certain aspects of the Services.
                  </Text>
                </Box>
                {/*------------------------*/}
                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
                </Text>
                <Box padding={7} />
                <Text type="subtitle" fontWeight={600} italic underline>
                  If you are located in the EU or UK, this section applies to
                  you.
                </Text>

                {/* ------------------------- */}
                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  The General Data Protection Regulation (GDPR) and UK GDPR
                  require us to explain the valid legal bases we rely on in
                  order to process your personal information. As such, we may
                  rely on the following legal bases to process your personal
                  information:
                </Text>
                <Box padding={7} />
                <Box padding="0 0 0 30">
                  <Text type="subtitle" justify lineHeight={1.5}>
                    <Text
                      type="subtitle"
                      justify
                      lineHeight={1.5}
                      fontWeight={600}
                      noWrap
                      category="span"
                    >
                      • Consent.&nbsp;
                    </Text>
                    We may process your information if you have given us
                    permission (i.e., consent) to use your personal information
                    for a specific purpose. You can withdraw your consent at any
                    time.
                  </Text>
                  <Text type="subtitle" justify lineHeight={1.5}>
                    <Text
                      type="subtitle"
                      justify
                      lineHeight={1.5}
                      fontWeight={600}
                      noWrap
                      category="span"
                    >
                      • Legal Obligations.&nbsp;
                    </Text>
                    We may process your information where we believe it is
                    necessary for compliance with our legal obligations, such as
                    to cooperate with a law enforcement body or regulatory
                    agency, exercise or defend our legal rights, or disclose
                    your information as evidence in litigation in which we are
                    involved.
                  </Text>
                  <Text type="subtitle" justify lineHeight={1.5}>
                    <Text
                      type="subtitle"
                      justify
                      lineHeight={1.5}
                      fontWeight={600}
                      noWrap
                      category="span"
                    >
                      • Vital Interests.&nbsp;
                    </Text>
                    We may process your information where we believe it is
                    necessary to protect your vital interests or the vital
                    interests of a third party, such as situations involving
                    potential threats to the safety of any person.
                  </Text>
                </Box>
                <Box padding={7} />
                <Text type="subtitle" fontWeight={600} italic underline>
                  If you are located in Canada, this section applies to you.
                </Text>
                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  We may process your information if you have given us specific
                  permission (i.e., express consent) to use your personal
                  information for a specific purpose, or in situations where
                  your permission can be inferred (i.e., implied consent). You
                  can withdraw your consent at any time.
                </Text>
                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  In some exceptional cases, we may be legally permitted under
                  applicable law to process your information without your
                  consent, including, for example:
                </Text>

                {/*-----------------------------*/}
                <Box padding={7} />
                <Box padding="0 0 0 30">
                  <Text type="subtitle" justify lineHeight={1.5}>
                    • If collection is clearly in the interests of an individual
                    and consent cannot be obtained in a timely way
                  </Text>
                  <Text type="subtitle" justify lineHeight={1.5}>
                    • For investigations and fraud detection and prevention
                  </Text>
                  <Text type="subtitle" justify lineHeight={1.5}>
                    • For identifying injured, ill, or deceased persons and
                    communicating with next of kin
                  </Text>
                  <Text type="subtitle" justify lineHeight={1.5}>
                    • If we have reasonable grounds to believe an individual has
                    been, is, or may be victim of financial abuse
                  </Text>
                  <Text type="subtitle" justify lineHeight={1.5}>
                    • If it is reasonable to expect collection and use with
                    consent would compromise the availability or the accuracy of
                    the information and the collection is reasonable for
                    purposes related to investigating a breach of an agreement
                    or a contravention of the laws of Canada or a province
                  </Text>
                  <Text type="subtitle" justify lineHeight={1.5}>
                    • If disclosure is required to comply with a subpoena,
                    warrant, court order, or rules of the court relating to the
                    production of records
                  </Text>
                  <Text type="subtitle" justify lineHeight={1.5}>
                    • If it was produced by an individual in the course of their
                    employment, business, or profession and the collection is
                    consistent with the purposes for which the information was
                    produced
                  </Text>
                </Box>

                {/*------------------------*/}
                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </Text>

                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  We may need to share your personal information in the
                  following situations:
                </Text>
                <Box padding={7} />
                <Box padding="0 0 0 30">
                  <Text type="subtitle" justify lineHeight={1.5}>
                    <Text
                      type="subtitle"
                      justify
                      lineHeight={1.5}
                      fontWeight={600}
                      noWrap
                      category="span"
                    >
                      • Mergers and Acquisitions.&nbsp;
                    </Text>
                    We may share or transfer your information in connection
                    with, or during negotiations of, any merger, sale of company
                    assets, financing, or acquisition of all or a portion of our
                    business to another company.
                  </Text>
                  <Text type="subtitle" justify lineHeight={1.5}>
                    <Text
                      type="subtitle"
                      justify
                      lineHeight={1.5}
                      fontWeight={600}
                      noWrap
                      category="span"
                    >
                      • When we use Google Maps Platform APIs.&nbsp;
                    </Text>
                    We may share your information with certain Google Maps
                    Platform APIs (e.g., Google Maps API, Places API). To find
                    out more about Google’s Privacy Policy, please refer to this
                    link.
                  </Text>
                </Box>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </Text>

                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  We may use cookies and similar tracking technologies (like web
                  beacons and pixels) to access or store information. Specific
                  information about how we use such technologies and how you can
                  refuse certain cookies is set out in our Cookie Notice.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  HOW LONG DO WE KEEP YOUR INFORMATION?
                </Text>

                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  We will only keep your personal information for as long as it
                  is necessary for the purposes set out in this privacy notice,
                  unless a longer retention period is required or permitted by
                  law (such as tax, accounting, or other legal requirements). No
                  purpose in this notice will require us keeping your personal
                  information for longer than the period of time in which users
                  have an account with us.
                </Text>

                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  When we have no ongoing legitimate business need to process
                  your personal information, we will either delete or anonymize
                  such information, or, if this is not possible (for example,
                  because your personal information has been stored in backup
                  archives), then we will securely store your personal
                  information and isolate it from any further processing until
                  deletion is possible.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  HOW DO WE KEEP YOUR INFORMATION SAFE?
                </Text>

                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  We have implemented appropriate and reasonable technical and
                  organizational security measures designed to protect the
                  security of any personal information we process. However,
                  despite our safeguards and efforts to secure your information,
                  no electronic transmission over the Internet or information
                  storage technology can be guaranteed to be 100% secure, so we
                  cannot promise or guarantee that hackers, cybercriminals, or
                  other unauthorized third parties will not be able to defeat
                  our security and improperly collect, access, steal, or modify
                  your information. Although we will do our best to protect your
                  personal information, transmission of personal information to
                  and from our Services is at your own risk. You should only
                  access the Services within a secure environment.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  DO WE COLLECT INFORMATION FROM MINORS?
                </Text>

                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  We do not knowingly solicit data from or market to children
                  under 18 years of age. By using the Services, you represent
                  that you are at least 18 or that you are the parent or
                  guardian of such a minor and consent to such minor dependent’s
                  use of the Services.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  WHAT ARE YOUR PRIVACY RIGHTS?
                </Text>

                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  In some regions (like the EEA, UK, and Canada), you have
                  certain rights under applicable data protection laws. These
                  may include the right (i) to request access and obtain a copy
                  of your personal information, (ii) to request rectification or
                  erasure; (iii) to restrict the processing of your personal
                  information; and (iv) if applicable, to data portability. In
                  certain circumstances, you may also have the right to object
                  to the processing of your personal information. We will
                  consider and act upon any request in accordance with
                  applicable data protection laws. If you are located in the EEA
                  or UK and you believe we are unlawfully processing your
                  personal information, you also have the right to complain to
                  your local data protection supervisory authority.
                </Text>

                <Box padding={17} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  <Text
                    type="subtitle"
                    justify
                    lineHeight={1.5}
                    fontWeight={600}
                    noWrap
                    underline
                    category="span"
                  >
                    Opting out of marketing and promotional communications:
                  </Text>
                  You can unsubscribe from our marketing and promotional
                  communications at any time by clicking on the unsubscribe link
                  in the emails that we send, replying “STOP” or “UNSUBSCRIBE”
                  to the SMS messages that we send. However, we may still
                  communicate with you — for example, to send you
                  service-related messages that are necessary for the
                  administration and use of your account, to respond to service
                  requests, or for other non-marketing purposes.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  CONTROLS FOR DO-NOT-TRACK FEATURES
                </Text>

                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  Most web browsers and some mobile operating systems and mobile
                  applications include a Do-Not-Track (“DNT”) feature or setting
                  you can activate to signal your privacy preference not to have
                  data about your online browsing activities monitored and
                  collected. At this stage no uniform technology standard for
                  recognizing and implementing DNT signals has been finalized.
                  As such, we do not currently respond to DNT browser signals or
                  any other mechanism that automatically communicates your
                  choice not to be tracked online. If a standard for online
                  tracking is adopted that we must follow in the future, we will
                  inform you about that practice in a revised version of this
                  privacy notice.
                </Text>

                <Box padding={25} />
                <Text type="subtitle" fontWeight={600}>
                  DO WE MAKE UPDATES TO THIS NOTICE?
                </Text>

                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  We may update this privacy notice from time to time. The
                  updated version will be indicated by an updated “Revised” date
                  and the updated version will be effective as soon as it is
                  accessible. If we make material changes to this privacy
                  notice, we may notify you either by prominently posting a
                  notice of such changes or by directly sending you a
                  notification. We encourage you to review this privacy notice
                  frequently to be informed of how we are protecting your
                  information.
                </Text>

                <Box padding={10} />
                <Text type="subtitle" fontWeight={600}>
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </Text>

                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  If you have questions or comments about this notice, you may
                  email us at info@proofaudit.com or by post at:
                </Text>
                <Box padding={7} />
                <Text type="subtitle" justify lineHeight={1.5}>
                  Proof Audit:
                </Text>
                <Text type="subtitle" justify lineHeight={1.5}>
                  Building A2 IFZA Business Park
                </Text>
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

export default Privacy;
