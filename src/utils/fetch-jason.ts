export const fetchJson = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url, { next: { revalidate: 36000 } });

  const jasonData = await rawData.json();

  return jasonData;
};
