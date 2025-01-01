import crypto from "crypto";

export default function generateSecret(bytes) {
  return crypto.randomBytes(bytes).toString("hex");
}
