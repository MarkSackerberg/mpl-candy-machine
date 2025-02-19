/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { PublicKey } from '@metaplex-foundation/umi';
import {
  Serializer,
  publicKey as publicKeySerializer,
  struct,
  u64,
} from '@metaplex-foundation/umi/serializers';

/**
 * Guard that charges an amount in a specified spl-token as payment for the mint with a freeze period.
 *
 * List of accounts required:
 *
 * 0. `[writable]` Freeze PDA to receive the funds (seeds `["freeze_escrow",
 * destination_ata pubkey, candy guard pubkey, candy machine pubkey]`).
 * 1. `[]` Associate token account of the NFT (seeds `[payer pubkey, token
 * program pubkey, nft mint pubkey]`).
 * 2. `[writable]` Token account holding the required amount.
 * 3. `[writable]` Associate token account of the Freeze PDA (seeds `[freeze PDA
 * pubkey, token program pubkey, nft mint pubkey]`).
 * 4. `[optional]` Authorization rule set for the minted pNFT.
 */

export type FreezeTokenPayment = {
  amount: bigint;
  mint: PublicKey;
  destinationAta: PublicKey;
};

export type FreezeTokenPaymentArgs = {
  amount: number | bigint;
  mint: PublicKey;
  destinationAta: PublicKey;
};

/** @deprecated Use `getFreezeTokenPaymentSerializer()` without any argument instead. */
export function getFreezeTokenPaymentSerializer(
  _context: object
): Serializer<FreezeTokenPaymentArgs, FreezeTokenPayment>;
export function getFreezeTokenPaymentSerializer(): Serializer<
  FreezeTokenPaymentArgs,
  FreezeTokenPayment
>;
export function getFreezeTokenPaymentSerializer(
  _context: object = {}
): Serializer<FreezeTokenPaymentArgs, FreezeTokenPayment> {
  return struct<FreezeTokenPayment>(
    [
      ['amount', u64()],
      ['mint', publicKeySerializer()],
      ['destinationAta', publicKeySerializer()],
    ],
    { description: 'FreezeTokenPayment' }
  ) as Serializer<FreezeTokenPaymentArgs, FreezeTokenPayment>;
}
