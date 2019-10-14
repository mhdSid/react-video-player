
const getItemDetails = ({ details, id }) => {
  const _details = details.map(itemDetail => {
    if (itemDetail.data.id === id) {
      return { ...itemDetail.data };
    }
    return undefined;
  }).filter(Boolean);

  return _details[0];
};

export { getItemDetails };