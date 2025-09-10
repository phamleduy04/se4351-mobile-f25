import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { Center } from '@/components/ui/center';

import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <Center className="flex-1">
      <VStack space="lg" className="items-center">
        <Heading size="xl">{title}</Heading>
        <Box className="h-[1px] w-4/5 bg-gray-200 my-7" />
        <EditScreenInfo path={path} />
        {children}
      </VStack>
    </Center>
  );
};
