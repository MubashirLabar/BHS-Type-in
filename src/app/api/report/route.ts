import Papa from "papaparse";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  const res: any = await fetch(
    `https://api.maniasearch.com?pid=2018&key=kxXyCyWIgKRh71XxdhaDsoqwU0kdMbvk&date=${date}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (res.ok) {
    // Check if the response is JSON
    if (res.headers.get("content-type").includes("application/json")) {
      const data = await res.json();
      return Response.json({ data });
    } else if (res.headers.get("content-type").includes("text/csv")) {
      // Handle CSV response
      const text = await res.text();

      const parsedData = Papa.parse(text, { header: true });

      if (parsedData.errors.length > 0) {
        // console.error("CSV parsing error:", parsedData.errors);
        return new Response(null, {
          status: 500,
          statusText: "CSV parsing error",
        });
      }
      const jsonData = parsedData.data;
      //   console.log("JSON data:", jsonData);

      return Response.json({ data: jsonData });
    } else {
      console.error(
        "Unsupported content type:",
        res.headers.get("content-type")
      );
      return new Response(null, {
        status: 415,
        statusText: "Unsupported Media Type",
      });
    }
  } else {
    const text = await res.text();
    console.error("Non-JSON response:", text);
    return new Response(text, { status: res.status });
  }
}
