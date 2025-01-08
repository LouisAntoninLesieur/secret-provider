import crypto from "crypto";
import { Bytes } from "../../types/index";

export function generateSecret({ bytes }: Bytes) {

  if (!bytes) {
    return "No bytes provided";
  }

  try {
  return crypto.randomBytes(bytes).toString("hex");
  } catch (error) {
    console.error(error);
    return "Error generating secret";
  }

}
