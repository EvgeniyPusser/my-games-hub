import React, { useEffect, useState } from 'react'
import api from '../services/api-client.ts'
import { Game, FetchGamesResponse } from '../models/fetch-game-types'
import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>()
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        api.get<FetchGamesResponse>("/games")
            .then(res => setGames(res.data.results))
            .catch((err) => {
                setError("Failed to load games. Please try again later.")
                console.error(err)
            })
    }, [])

    if (error) {
        return <Text color="red.500">{error}</Text>
    }

    return (
        <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            gap={5}
            maxHeight="80vh"
            overflow="auto"
        >
            {games?.map(g => (
                <GameCard key={g.id} game={g} />
            ))}
        </SimpleGrid>
    )
}

export default GameGrid
