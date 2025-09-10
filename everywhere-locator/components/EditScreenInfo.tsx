import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Center } from '@/components/ui/center';

export const EditScreenInfo = ({ path }: { path: string }) => {
  const title = 'Open up the code for this screen:';
  const description =
    'Change any of the text, save the file, and your app will automatically update.';

  return (
    <Box>
      <Center className="mx-12">
        <VStack space="sm" className="items-center">
          <Text size="lg" className="text-center leading-6">{title}</Text>
          <Box className="rounded-md px-1 my-2">
            <Text>{path}</Text>
          </Box>
          <Text size="lg" className="text-center leading-6">{description}</Text>
        </VStack>
      </Center>
    </Box>
  );
};
