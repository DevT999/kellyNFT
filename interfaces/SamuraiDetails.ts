/* eslint-disable camelcase */

/**
 * Structure of a samurai attribute
 */
export interface Attribute {
  display_type?: string;
  trait_type: string;
  value: string | number;
}

/**
 * Structure of the details for a Samurai entity
 */
export interface SamuraiDetails {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly external_url: string;
  readonly image: string;
  readonly video: string;
  readonly background_color: string;
  readonly attributes: Attribute[];
}
