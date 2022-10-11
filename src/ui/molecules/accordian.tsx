import React, { useState } from "react";
import { Box, Flex, Text, Icon } from "ui/atoms";
import { COLORS } from "config/colors";
import Icons from "assets/icons";

interface IAccordianContentTypes {
  title: string;
  content: string;
  collapse: boolean;
}

interface IAccordianProps {
  contents: Array<IAccordianContentTypes>;
}

const Accordian: React.FC<IAccordianProps> = ({ contents }) => {
  const [content, setContent] = useState<Array<IAccordianContentTypes>>(
    contents
  );
  return (
    <Box width="100%" backgroundColor="#999" cursor>
      <Flex flexDirection="column" gap={5}>
        {content.length === 0 && (
          <Box backgroundColor={COLORS.WHITE} padding={50}>
            <Text type="subtitle">"No FAQs"</Text>
          </Box>
        )}
        {content.length > 0 &&
          content.map((contentItem, index) => {
            return (
              <Box
                backgroundColor={COLORS.WHITE}
                padding={20}
                onClick={() => {
                  const newContent = content.map((contentItem, idx) => {
                    if (idx === index)
                      contentItem.collapse = !contentItem.collapse;
                    else contentItem.collapse = true;
                    return contentItem;
                  });
                  setContent(newContent);
                }}
                key={index}
              >
                <Box transition={1} cursor>
                  <Flex gap={20} flexDirection="column" justifyContent="center">
                    <Flex alignItems="center" gap={15}>
                      <Text type="logo" color={COLORS.LIGHT_BLUE}>
                        {!contentItem.collapse ? (
                          <Icon icon={Icons.minus} size="MEDIUM"></Icon>
                        ) : (
                          <Icon icon={Icons.plus} size="MEDIUM"></Icon>
                        )}
                      </Text>
                      <Text type="undersubtitle" fontWeight={500}>{contentItem.title}</Text>
                    </Flex>
                    {!contentItem.collapse && (
                      <Text type="paragraph">{contentItem.content}</Text>
                    )}
                  </Flex>
                </Box>
              </Box>
            );
          })}
      </Flex>
    </Box>
  );
};

export default Accordian;
