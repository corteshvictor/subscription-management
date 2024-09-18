const { PORT } = process.env;

export const envs = {
  PORT: Number(PORT) || 3000,
};
