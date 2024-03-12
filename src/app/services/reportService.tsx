export async function fetchReport(params?: any) {
  const res = await fetch(
    `/api/report?start_date=${params.start_date}&end_date=${params.end_date}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data?.data;
}
