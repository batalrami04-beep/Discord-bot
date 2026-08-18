const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder
} = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("اختبار البوت"),

  new SlashCommandBuilder()
    .setName("هوية")
    .setDescription("عرض نظام الهوية"),

  new SlashCommandBuilder()
    .setName("شنطة")
    .setDescription("عرض الشنطة"),

  new SlashCommandBuilder()
    .setName("راتب")
    .setDescription("استلام الراتب")
].map(command => command.toJSON());

client.once("ready", async () => {
  console.log(`تم تشغيل البوت: ${client.user.tag}`);
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("🏓 Pong!");
  }

  if (interaction.commandName === "هوية") {
    await interaction.reply("🪪 نظام الهوية قيد التجهيز.");
  }

  if (interaction.commandName === "شنطة") {
    await interaction.reply("🎒 الشنطة قيد التجهيز.");
  }

  if (interaction.commandName === "راتب") {
    await interaction.reply("💵 تم استلام الراتب.");
  }
});

const token = process.env.DISCORD_TOKEN;

if (!token) {
  console.error("لم يتم العثور على DISCORD_TOKEN");
  process.exit(1);
}

client.login(token);
