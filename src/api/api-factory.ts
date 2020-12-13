const baseUrl = "http://api-factory.simbirsoft1.com";
const dbUrl = "http://api-factory.simbirsoft1.com/api/db/";
const corsUrl = "https://cors-anywhere.herokuapp.com/";
const headers = {
  "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
};
const getInit = {
  method: "GET",
  headers,
};
const postInit = {
  method: "POST",
  headers: { ...headers, "Content-Type": "application/json;charset=utf-8" },
};

export async function loadCities() {
  const response = await fetch(`${corsUrl}${dbUrl}city`, getInit);

  if (response.ok) {
    return response.json();
  }
}

export async function loadPoints() {
  const response = await fetch(`${corsUrl}${dbUrl}point`, getInit);

  if (response.ok) {
    return response.json();
  }
}

export async function loadCars() {
  const response = await fetch(`${corsUrl}${dbUrl}car?limit=6`, getInit);

  if (response.ok) {
    return response.json();
  }
}

export async function loadRates() {
  const response = await fetch(`${corsUrl}${dbUrl}rate`, getInit);

  if (response.ok) {
    return response.json();
  }
}

export async function loadCarImage(path: string) {
  const response = await fetch(`${corsUrl}${baseUrl}${path}`, getInit);

  if (response.ok) {
    return response.blob();
  }
}

export async function makeOrder(request: any) {
  const response = await fetch(`${corsUrl}${dbUrl}order`, {
    ...postInit,
    body: JSON.stringify(request),
  });

  if (response.ok) {
    return response.json();
  }
}

export async function getOrder(id: string) {
  const response = await fetch(`${corsUrl}${dbUrl}order/${id}`, getInit);

  if (response.ok) {
    return response.json();
  }
}
