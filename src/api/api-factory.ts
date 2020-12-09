const baseUrl = "http://api-factory.simbirsoft1.com";
const dbUrl = "http://api-factory.simbirsoft1.com/api/db/";
const corsUrl = "https://cors-anywhere.herokuapp.com/";
const headers = {
  "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
};

export async function loadCities() {
  const response = await fetch(`${corsUrl}${dbUrl}city`, {
    method: "GET",
    headers,
  });

  if (response.ok) {
    return response.json();
  }
}

export async function loadPoints() {
  const response = await fetch(`${corsUrl}${dbUrl}point`, {
    method: "GET",
    headers,
  });

  if (response.ok) {
    return response.json();
  }
}

export async function loadCars() {
  const response = await fetch(`${corsUrl}${dbUrl}car?limit=6`, {
    method: "GET",
    headers,
  });

  if (response.ok) {
    return response.json();
  }
}

export async function loadRates() {
  const response = await fetch(`${corsUrl}${dbUrl}rate`, {
    method: "GET",
    headers,
  });

  if (response.ok) {
    return response.json();
  }
}

export async function loadCarImage(path: string) {
  const response = await fetch(`${corsUrl}${baseUrl}${path}`, {
    headers,
  });

  if (response.ok) {
    return response.blob();
  }
}
