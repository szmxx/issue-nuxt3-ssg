import { randomUUID } from 'node:crypto';

export default defineEventHandler(async (event) => {
  try {
    return [
      {
        uuid: randomUUID(),
        title: 'posts-1',
      },
      {
        uuid: randomUUID(),
        title: 'posts-2',
      },
    ];
  } catch (e) {
    handleError(e);
  }
});
