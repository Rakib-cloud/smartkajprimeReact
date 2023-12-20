export const convertPageTitle = (str: string) => {
  let words = str?.replace(/\band\b/g, '&').split(/[-&]/);
  words = words?.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return words?.join(' ');
  // return result;
};
