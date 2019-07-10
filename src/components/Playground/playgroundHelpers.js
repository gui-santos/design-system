export const transformCode = (code, editedProps) => {
  let newCode = code;
  // get a string with the props changed by the user
  const newProps = Object.keys(editedProps).reduce(
    (str, key) => `${str} ${key}=${editedProps[key]}`,
    ''
  );

  // remove duplicated prop
  if (Object.keys(editedProps).length > 0) {
    Object.keys(editedProps).forEach(key => {
      const regex = new RegExp(`${key}=("|{).+("|}) `, 'g');
      newCode = newCode.replace(regex, '');
    });
  }

  return newCode.replace(/\s/, `${newProps} `);
};
