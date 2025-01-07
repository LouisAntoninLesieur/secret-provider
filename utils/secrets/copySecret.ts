import type { Secret } from "../../types/index";

export default function copySecret({ secret }: Secret) {

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