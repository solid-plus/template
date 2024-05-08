import type { User } from "./types.js";

/**
 * Get the greeting message for a name
 * @param  user - The User
 * @returns The greeting message
 */
export function greeting({ name }: User): string {
  return `Hello ${name} !`;
}
