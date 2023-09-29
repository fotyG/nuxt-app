export const useUtils = () => {
  const sayHello = (text: string) => console.log(text);

  const onClickOutside = () => {};

  return {
    sayHello,
  };
};
