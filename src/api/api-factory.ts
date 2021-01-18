import { Base64 } from "js-base64";

const baseUrl = "http://api-factory.simbirsoft1.com";
const authUrl = "http://api-factory.simbirsoft1.com/api/auth/";
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

export async function getOrders(token: string, limit: number, page: number) {
  const response = await fetch(
    `${corsUrl}${dbUrl}order?page=${page}&limit=${limit}`,
    {
      method: "GET",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    }
  );

  if (response.ok) {
    return response.json();
  }
}

export async function getCars(token: string, limit: number, page: number) {
  const response = await fetch(
    `${corsUrl}${dbUrl}car?page=${page}&limit=${limit}`,
    {
      method: "GET",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    }
  );

  if (response.ok) {
    return response.json();
  }
}

export async function login(username: string, password: string) {
  const response = await fetch(`${corsUrl}${authUrl}login`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Basic ${Base64.encode(
        `${Math.random().toString(36).substr(2, 7)}:4cbcea96de`
      )}`,
    },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    return response.json();
  }
}

export async function register(login: string, password: string) {
  const response = await fetch(`${corsUrl}${authUrl}register`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ login, password }),
  });

  if (response.ok) {
    return response.json();
  }
}
