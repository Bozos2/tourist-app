export const renderIfOwnUser = (
  isOwnUser: boolean,
  value: any,
  component: JSX.Element,
) => {
  if (isOwnUser && value) {
    return component;
  }
  return null;
};

export const renderIfValueExist = (value: any, component: JSX.Element) => {
  if (value) {
    return component;
  }
  return null;
};
