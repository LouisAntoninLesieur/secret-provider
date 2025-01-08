import type { Secret } from "../../types/index";

export function copySecret({ secret }: Secret) {

  if (!secret) {
    return "No secret provided";
  }

  try {
  return navigator.clipboard.writeText(secret);
  } catch (error) {
    console.error(error);
    return "Error copying secret";
  }

}