import type { User } from "./User.js";

/**
 * Get the greeting message for a name
 * @param {object} arg
 * @param {string} arg.name The name for the greeting message
 * @returns {string} The greeting message
 */
export function greeting({ name }: User): string {
  return `Hello ${name} !`;
}
