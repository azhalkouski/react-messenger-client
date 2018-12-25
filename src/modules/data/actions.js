export const PUSH_ITEM = 'data/PUSH_ITEM';
export const PUSH_ITEMS = 'data/PUSH_ITEMS';

export const pushItem = (collection, item) => ({
  type: `${PUSH_ITEM}_${collection.toUpperCase()}`,
  payload: item,
  meta: {
    collection,
  },
});

export const pushItems = (collection, items) => ({
  type: `${PUSH_ITEMS}_${collection.toUpperCase()}`,
  payload: items,
  meta: {
    collection,
  },
});
