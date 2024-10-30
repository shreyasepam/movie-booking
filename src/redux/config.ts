export function movieObjectMapper<T extends Record<string, any>>(
  data: T[],
  key: keyof T,
  value: keyof T
): Record<string, T[keyof T]> {
  const obj: Record<string, T[keyof T]> = {};

  data.forEach((x) => {
    if (x[key] !== undefined && x[value] !== undefined) {
      obj[String(x[key])] = x[value];
    }
  });

  return obj;
}
