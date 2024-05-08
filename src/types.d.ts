/**
 * This file is the entrypoint of the package types.
 * It *SHOULD* only export exposed types, interfaces, and modules.
 * Don't forget to document with the TSDoc syntax !
 * @see {@link https://tsdoc.org/}
 */

/**
 * Represents a Foo
 */
export interface Foo {
  bar: string;
}

/**
 * Represents a User
 */
export type User = {
  name: string;
};
