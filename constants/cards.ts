/**
 * An interface that describes the data structure for a card purchase
 */
export interface CardPurchase {
  id: number;
  cardAmount: number;
  isPack: boolean;
  price: number;
  name: string;
}

/**
 * An interface that describes the data structure for all card purchase options
 */
export interface CardPurchaseOptions {
  [key: string]: CardPurchase;
}

/**
 * A list of cards to display the options before purchase
 */
export const CARD_PURCHASE_OPTIONS: CardPurchaseOptions = {
  basic_pack_0: {
    id: 0,
    cardAmount: 1,
    name: 'Lone Samurai',
    price: 0.15,
    isPack: false,
  },
  basic_pack_1: {
    id: 1,
    cardAmount: 5,
    name: 'Novice Pack',
    price: 0.5,
    isPack: true,
  },
  basic_pack_2: {
    id: 2,
    cardAmount: 10,
    name: 'Apprentice Pack',
    price: 1,
    isPack: true,
  },
  basic_pack_3: {
    id: 3,
    cardAmount: 15,
    name: 'Journeyman Pack',
    price: 1.5,
    isPack: true,
  },
  basic_pack_4: {
    id: 4,
    cardAmount: 25,
    name: 'Master Pack',
    price: 2,
    isPack: true,
  },
  // 'expansion-pack_0': {
  //   id: 5,
  //   cardAmount: 1,
  //   name: '1 Expansion Card',
  //   price: 2,
  //   isPack: false,
  // },
  // 'expansion-pack_1': {
  //   id: 6,
  //   cardAmount: 10,
  //   name: '1 Expansion Pack',
  //   price: 2,
  //   isPack: true,
  // },
};

/**
 * A function that returns the id's of all the purchase options
 *
 * @returns A list with all the id's for the purchase options
 */
export const getPurchaseOptions = (): string[] =>
  Object.keys(CARD_PURCHASE_OPTIONS);

/**
 * A function that retrieves data for a card purchase
 *
 * @param id The id of the item that should be retrieved
 *
 * @returns The card purchase data based on the item id
 */
export const getPurchaseOption = (
  id: keyof typeof CARD_PURCHASE_OPTIONS,
): CardPurchase => CARD_PURCHASE_OPTIONS[id];
