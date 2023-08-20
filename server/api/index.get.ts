import { randomUUID } from 'node:crypto';

export default defineEventHandler(async (event) => {
  try {
    return [
      {
        uuid: randomUUID(),
        title: 'twitter',
      },
      {
        uuid: randomUUID(),
        title: 'github',
      },
    ];
  } catch (e) {
    handleError(e);
  }
});
