

// export default 
import { Badge, Box, HStack, Text, Image } from "@chakra-ui/react";
import { Game } from '../models/fetch-game-types';

const GameCard = ({ game }: { game: Game }) => {
  const metacritic = game.metacritic;

  const badgeColor = metacritic > 90 ? "green" : "gray.200";
  const textColor = metacritic > 90 ? "white" : "black";

  const platforms = game.parent_platforms
    ?.map((p) => p.platform.name)
    .join(", ");

  return (
    <Box borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
      <Image
        src={game.background_image}
        alt={game.name}
        borderRadius="md"
        objectFit="cover"
        w="100%"
        h="200px"
      />
      <Box mt={2}>
        <Text fontWeight="bold" fontSize="lg">
          {game.name}
        </Text>
        <HStack justifyContent="space-between" mt={2}>
          {metacritic !== undefined && (
            <Badge bgColor={badgeColor} color={textColor} px={2}>
              {metacritic}
            </Badge>
          )}
          <Text fontSize="sm" color="gray.500" truncate>
            {platforms}
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default GameCard;

