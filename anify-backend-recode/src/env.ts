// All environment variables.
export const env = {
    PORT: Number(process.env.PORT) || 3000,
    NINEANIME_RESOLVER: process.env.NINEANIME_RESOLVER,
    NINEANIME_KEY: process.env.NINEANIME_KEY,
    REDIS_URL: process.env.REDIS_URL,
    REDIS_CACHE_TIME: Number(process.env.REDIS_CACHE_TIME) || 60 * 60 * 24 * 7,
    USE_API_KEYS: process.env.USE_API_KEYS || "false",
    MASTER_KEY: process.env.MASTER_KEY,
    API_KEY_WHITELIST: process.env.API_KEY_WHITELIST?.split(",") || [],
    CENSYS_ID: process.env.CENSYS_ID,
    CENSYS_SECRET: process.env.CENSYS_SECRET,
    USE_MIXDROP: process.env.USE_MIXDROP === "true" || false,
    MIXDROP_EMAIL: process.env.MIXDROP_EMAIL,
    MIXDROP_KEY: process.env.MIXDROP_KEY,
};
