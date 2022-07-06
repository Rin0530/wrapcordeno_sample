import { CreateBotOptions, ENV, start } from "./deps.ts"
import { ping } from "./commands/mod.ts"

const TOKEN = ENV.require("TOKEN");
const botOptions:CreateBotOptions = {
    token: TOKEN
}
const PUBLICKEY = ENV.require("PUBLICKEY")

start([ping], {botOptions: botOptions, publicKey: PUBLICKEY})