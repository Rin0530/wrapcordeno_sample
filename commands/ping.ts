import { ApplicationCommandInteraction, CommandStructure, createInteractionResponse, InteractionResponseTypes } from "../deps.ts"

export const ping:CommandStructure = {
    command: {
        name: "ping",
        description: "send pong!!",
    },
    execute: async (interaction:ApplicationCommandInteraction) => {
        await createInteractionResponse(interaction, {
            type: InteractionResponseTypes.ChannelMessageWithSource,
            data: {
                content: "pong"
            }
        })
    }
}