import z from "zod";


export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().default(4000),
});

export type EnvSchema = z.infer<typeof envSchema>;

const _env = envSchema.parse(process.env);

export const env = _env;