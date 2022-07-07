import { ApplicationCommandInteraction, CommandStructure, InteractionResponse, InteractionResponseTypes } from "../deps.ts"

export const ping:CommandStructure = {
    command: {
        name: "ping",
        description: "send pong!!",
    },
    execute: (interaction:ApplicationCommandInteraction):InteractionResponse => {
        return {
            type: InteractionResponseTypes.ChannelMessageWithSource,
            data: {
                content: "pong"
            }
        }
    }
}