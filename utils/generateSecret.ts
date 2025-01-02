import crypto from "crypto";
import { GenerateSecret } from "@/app/types/interfaces";

export default function generateSecret({ bytes }: GenerateSecret) {
  return crypto.randomBytes(bytes).toString("hex");
}
