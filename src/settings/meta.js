export const setMeta = (title = '') => {
  return {
    title: 'Sedona',
    titleTemplate: title.length ? `%s - ${title}` : '%s',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    }
  };
}
