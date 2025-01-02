import { Secret } from "@/app/types/interfaces";

export default function copySecret({ secret }: Secret) {
  return navigator.clipboard.writeText(secret);
}