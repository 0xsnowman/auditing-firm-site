import React from "react";
import {
  Flex,
  Text,
  Container,
  Box,
  ContentWrapper
} from "ui/atoms";
import { Page } from "ui/molecules";
import { COLORS } from "config/colors";
// import { WINDOW_SIZES } from "config/dimensions";
// import contractData from "assets/json/contracts.json";

const Disclaimer = () => {
  return (
    <Page>
      <Box padding={42} backgroundColor={COLORS.DARK_THEME_BLACK} />
      <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
        <Container>
          <Box padding={60}></Box>
          <Box paddingHorizontal={20} paddingVertical={15}>
            <Flex flexDirection="column" alignItems="center" gap={20}>
              <Text center type="title" fontWeight={600}>
                Disclaimer
              </Text>
              <Box
                maxWidth={1280}
                backgroundColor={COLORS.DARK_THEME_GREY_BACKGROUND}
                paddingVertical={30}
                paddingHorizontal={50}
              >
                <Text justify type="subtitle" lineHeight={1.5}>
                  The information provided on this website does not constitute
                  investment advice, financial advice, trading advice, or any
                  other sort of advice and you should not treat any of the
                  website’s content as such. By reading any Proof Report or by
                  using this website, you agree to the terms of this disclaimer.
                  If you do not agree to the terms, then please immediately
                  cease using this website, and delete and destroy any and all
                  copies of any report downloaded and/or printed by you.
                </Text>
                <Box padding={10} />
                <Text justify type="subtitle" lineHeight={1.5}>
                  All reports are provided for information purposes only and on
                  a non-reliance basis, and do not constitute investment advice.
                  No one shall have any right to rely on any Proof Audit report
                  or its contents, and Proof Audit and its affiliates (including
                  holding companies, shareholders, subsidiaries, employees,
                  directors, officers and other representatives (Proof Audit)
                  owe no duty of care towards you or any other person, nor does
                  Proof Audit make any warranty or representation to any person
                  on the accuracy or completeness of any report.
                </Text>
                <Box padding={10} />
                <Text justify type="subtitle" lineHeight={1.5}>
                  All reports are provided “as is”, without any conditions,
                  warranties or other terms of any kind except as set out in
                  this disclaimer, and Proof Audit hereby excludes all
                  representations, warranties, conditions and other terms
                  (including, without limitation, the warranties implied by law
                  of satisfactory quality, fitness for purpose and the use of
                  reasonable care and skill) which, but for this clause, might
                  have effect in relation to a report.
                </Text>
                <Box padding={10} />
                <Text justify type="subtitle" lineHeight={1.5}>
                  Except and only to the extent that it is prohibited by law,
                  Proof Audit hereby excludes all liability and responsibility,
                  and neither you nor any other person shall have any claim
                  against Proof Audit, for any amount or type of loss or damage
                  that may result to you or any other person (including without
                  limitation, any direct, indirect, special, punitive,
                  consequential or pure economic loss or damages, or any loss of
                  income, profits, goodwill, data, contracts, use of money, or
                  business interruption, and whether in delict, tort (including
                  without limitation negligence), contract, breach of statutory
                  duty, misrepresentation (whether innocent or negligent) or
                  otherwise under any claim of any nature whatsoever in any
                  jurisdiction) in any way arising from or connected with any
                  Proof report and the use, inability to use or the results of
                  use of a Proof report, and any reliance on a Proof report.
                </Text>
                <Box padding={10} />
                <Text justify type="subtitle" lineHeight={1.5}>
                  Security analytics are based solely on smart contracts.
                  Application or process security not checked. Product code not
                  reviewed. You understand that you are using any and all
                  information available here at your own risk. Any use or
                  reliance on our content and services is solely at your own
                  risk and discretion.
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

export default Disclaimer;
