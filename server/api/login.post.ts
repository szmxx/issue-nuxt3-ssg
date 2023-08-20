import { randomUUID } from 'node:crypto';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    return {
      uuid: randomUUID(),
      username: 'cola',
    };
  } catch (e) {
    handleError(e);
  }
});
