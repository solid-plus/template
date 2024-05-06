/**
 * This file is the entrypoint of the package.
 * It *SHOULD* only export exposed functionalities and types.
 *
 * @example
 * ```ts
 * export * from "./some-file.js(x)"
 * export { foo } from "./file-which-export-foo.ts(x)"
 * export type {
 *    SomeType
 * } from "./types.ts"
 * ```
 */

export { greeting } from "./greeting.js";

export type { User } from "./types.js";
