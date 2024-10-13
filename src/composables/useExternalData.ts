export type User = {
  id: string;
  name: string;
  description: string;
  avatarUrl: string;
};

export const useUserAsync = async () => {
  const res = await fetch("/api/users");
  return res.json() as Promise<User[]>;
};

export const useScoreAsync = async (id: string) => {
  const res = await fetch(`/api/scores/${id}`);
  return res.json() as Promise<number[]>;
};

export const useBlobImageAsync = async (url: string) => {
  const response = await fetch(url);
  const imageBlob = await response.blob();
  return URL.createObjectURL(imageBlob);
};
