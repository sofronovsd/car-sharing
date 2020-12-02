export async function loadCities() {
  const response = await fetch(
    "http://api-factory.simbirsoft1.com/api/db/city",
    {
      method: "GET",
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      },
    }
  );

  if (response.ok) {
    return response.json();
  }
}

export async function loadPoints() {
  const response = await fetch(
    "http://api-factory.simbirsoft1.com/api/db/point",
    {
      method: "GET",
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      },
    }
  );

  if (response.ok) {
    return response.json();
  }
}
