export const login = async (credential: ISignin) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  });
  return response.json();
};

export const signup = async (body: ISingup) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/signup", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
};
