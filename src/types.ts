/**
 * This file is the entrypoint of the package types.
 * It *SHOULD* only export exposed types, interfaces, and modules.
 * Don't forget to JSDoc !
 *
 * @example
 * ```ts
 * export type SomeType = { foo: Foo };
 *
 * export interface Foo {
 *  bar: string;
 * }
 *
 * declare module "module-name" {
 *    // some namespaces, types, or interfaces to augment from `module-name`
 * }
 * ```
 */

export interface Foo {
  bar: string;
}

export type SomeType = { foo: Foo };

export type { User } from "./User.js";
