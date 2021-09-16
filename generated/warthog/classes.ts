// This file has been auto-generated by Warthog.  Do not update directly as it
// will be re-written.  If you need to change this file, update models or add
// new TypeGraphQL objects
// prettier-ignore
// @ts-ignore
import { DateResolver as Date } from 'graphql-scalars';
// prettier-ignore
// @ts-ignore
import { GraphQLID as ID } from 'graphql';
// prettier-ignore
// @ts-ignore
import { ArgsType, Field as TypeGraphQLField, Float, InputType as TypeGraphQLInputType, Int } from 'type-graphql';
// prettier-ignore
// @ts-ignore
import { registerEnumType, GraphQLISODateTime as DateTime } from "type-graphql";

import * as BN from "bn.js";

// prettier-ignore
// @ts-ignore eslint-disable-next-line @typescript-eslint/no-var-requires
const { GraphQLJSONObject } = require('graphql-type-json');
// prettier-ignore
// @ts-ignore
import { BaseWhereInput, JsonObject, PaginationArgs, DateOnlyString, DateTimeString, BigInt, Bytes } from '@subsquid/warthog';

// @ts-ignore
import { BlockTimestamp } from "../modules/block-timestamp/block-timestamp.model";
// @ts-ignore
import { CategoricalMarket } from "../modules/categorical-market/categorical-market.model";
// @ts-ignore
import { Market } from "../modules/market/market.model";
// @ts-ignore
import { ScalarMarket } from "../modules/scalar-market/scalar-market.model";
// @ts-ignore
import { Transfer } from "../modules/transfer/transfer.model";

export enum BlockTimestampOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  blockNumber_ASC = "blockNumber_ASC",
  blockNumber_DESC = "blockNumber_DESC",

  timestamp_ASC = "timestamp_ASC",
  timestamp_DESC = "timestamp_DESC",
}

registerEnumType(BlockTimestampOrderByEnum, {
  name: "BlockTimestampOrderByInput",
});

@TypeGraphQLInputType()
export class BlockTimestampWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField(() => Int, { nullable: true })
  blockNumber_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  blockNumber_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  blockNumber_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  blockNumber_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  blockNumber_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  blockNumber_in?: number[];

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_eq?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_gt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_gte?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_lt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_lte?: string;

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  timestamp_in?: string[];

  @TypeGraphQLField(() => BlockTimestampWhereInput, { nullable: true })
  AND?: [BlockTimestampWhereInput];

  @TypeGraphQLField(() => BlockTimestampWhereInput, { nullable: true })
  OR?: [BlockTimestampWhereInput];
}

@TypeGraphQLInputType()
export class BlockTimestampWhereUniqueInput {
  @TypeGraphQLField(() => ID)
  id?: string;
}

@TypeGraphQLInputType()
export class BlockTimestampCreateInput {
  @TypeGraphQLField()
  blockNumber!: number;

  @TypeGraphQLField()
  timestamp!: string;
}

@TypeGraphQLInputType()
export class BlockTimestampUpdateInput {
  @TypeGraphQLField({ nullable: true })
  blockNumber?: number;

  @TypeGraphQLField({ nullable: true })
  timestamp?: string;
}

@ArgsType()
export class BlockTimestampWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => BlockTimestampWhereInput, { nullable: true })
  where?: BlockTimestampWhereInput;

  @TypeGraphQLField(() => BlockTimestampOrderByEnum, { nullable: true })
  orderBy?: BlockTimestampOrderByEnum[];
}

@ArgsType()
export class BlockTimestampCreateManyArgs {
  @TypeGraphQLField(() => [BlockTimestampCreateInput])
  data!: BlockTimestampCreateInput[];
}

@ArgsType()
export class BlockTimestampUpdateArgs {
  @TypeGraphQLField() data!: BlockTimestampUpdateInput;
  @TypeGraphQLField() where!: BlockTimestampWhereUniqueInput;
}

export enum CategoricalMarketOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  oracle_ASC = "oracle_ASC",
  oracle_DESC = "oracle_DESC",

  end_ASC = "end_ASC",
  end_DESC = "end_DESC",

  creation_ASC = "creation_ASC",
  creation_DESC = "creation_DESC",

  categories_ASC = "categories_ASC",
  categories_DESC = "categories_DESC",

  block_ASC = "block_ASC",
  block_DESC = "block_DESC",
}

registerEnumType(CategoricalMarketOrderByEnum, {
  name: "CategoricalMarketOrderByInput",
});

@TypeGraphQLInputType()
export class CategoricalMarketWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  oracle_eq?: string;

  @TypeGraphQLField({ nullable: true })
  oracle_contains?: string;

  @TypeGraphQLField({ nullable: true })
  oracle_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  oracle_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  oracle_in?: string[];

  @TypeGraphQLField(() => BigInt, { nullable: true })
  end_eq?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  end_gt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  end_gte?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  end_lt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  end_lte?: string;

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  end_in?: string[];

  @TypeGraphQLField({ nullable: true })
  creation_eq?: string;

  @TypeGraphQLField({ nullable: true })
  creation_contains?: string;

  @TypeGraphQLField({ nullable: true })
  creation_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  creation_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  creation_in?: string[];

  @TypeGraphQLField(() => BigInt, { nullable: true })
  categories_eq?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  categories_gt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  categories_gte?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  categories_lt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  categories_lte?: string;

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  categories_in?: string[];

  @TypeGraphQLField(() => Int, { nullable: true })
  block_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  block_in?: number[];

  @TypeGraphQLField(() => CategoricalMarketWhereInput, { nullable: true })
  AND?: [CategoricalMarketWhereInput];

  @TypeGraphQLField(() => CategoricalMarketWhereInput, { nullable: true })
  OR?: [CategoricalMarketWhereInput];
}

@TypeGraphQLInputType()
export class CategoricalMarketWhereUniqueInput {
  @TypeGraphQLField(() => ID)
  id?: string;
}

@TypeGraphQLInputType()
export class CategoricalMarketCreateInput {
  @TypeGraphQLField()
  oracle!: string;

  @TypeGraphQLField()
  end!: string;

  @TypeGraphQLField()
  creation!: string;

  @TypeGraphQLField()
  categories!: string;

  @TypeGraphQLField()
  block!: number;
}

@TypeGraphQLInputType()
export class CategoricalMarketUpdateInput {
  @TypeGraphQLField({ nullable: true })
  oracle?: string;

  @TypeGraphQLField({ nullable: true })
  end?: string;

  @TypeGraphQLField({ nullable: true })
  creation?: string;

  @TypeGraphQLField({ nullable: true })
  categories?: string;

  @TypeGraphQLField({ nullable: true })
  block?: number;
}

@ArgsType()
export class CategoricalMarketWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => CategoricalMarketWhereInput, { nullable: true })
  where?: CategoricalMarketWhereInput;

  @TypeGraphQLField(() => CategoricalMarketOrderByEnum, { nullable: true })
  orderBy?: CategoricalMarketOrderByEnum[];
}

@ArgsType()
export class CategoricalMarketCreateManyArgs {
  @TypeGraphQLField(() => [CategoricalMarketCreateInput])
  data!: CategoricalMarketCreateInput[];
}

@ArgsType()
export class CategoricalMarketUpdateArgs {
  @TypeGraphQLField() data!: CategoricalMarketUpdateInput;
  @TypeGraphQLField() where!: CategoricalMarketWhereUniqueInput;
}

export enum MarketOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  marketId_ASC = "marketId_ASC",
  marketId_DESC = "marketId_DESC",

  creator_ASC = "creator_ASC",
  creator_DESC = "creator_DESC",

  creation_ASC = "creation_ASC",
  creation_DESC = "creation_DESC",

  oracle_ASC = "oracle_ASC",
  oracle_DESC = "oracle_DESC",

  metadata_ASC = "metadata_ASC",
  metadata_DESC = "metadata_DESC",

  block_ASC = "block_ASC",
  block_DESC = "block_DESC",
}

registerEnumType(MarketOrderByEnum, {
  name: "MarketOrderByInput",
});

@TypeGraphQLInputType()
export class MarketWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField(() => Int, { nullable: true })
  marketId_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  marketId_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  marketId_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  marketId_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  marketId_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  marketId_in?: number[];

  @TypeGraphQLField({ nullable: true })
  creator_eq?: string;

  @TypeGraphQLField({ nullable: true })
  creator_contains?: string;

  @TypeGraphQLField({ nullable: true })
  creator_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  creator_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  creator_in?: string[];

  @TypeGraphQLField({ nullable: true })
  creation_eq?: string;

  @TypeGraphQLField({ nullable: true })
  creation_contains?: string;

  @TypeGraphQLField({ nullable: true })
  creation_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  creation_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  creation_in?: string[];

  @TypeGraphQLField({ nullable: true })
  oracle_eq?: string;

  @TypeGraphQLField({ nullable: true })
  oracle_contains?: string;

  @TypeGraphQLField({ nullable: true })
  oracle_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  oracle_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  oracle_in?: string[];

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  end_json?: JsonObject;

  @TypeGraphQLField({ nullable: true })
  metadata_eq?: string;

  @TypeGraphQLField({ nullable: true })
  metadata_contains?: string;

  @TypeGraphQLField({ nullable: true })
  metadata_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  metadata_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  metadata_in?: string[];

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  marketType_json?: JsonObject;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  block_in?: number[];

  @TypeGraphQLField(() => MarketWhereInput, { nullable: true })
  AND?: [MarketWhereInput];

  @TypeGraphQLField(() => MarketWhereInput, { nullable: true })
  OR?: [MarketWhereInput];
}

@TypeGraphQLInputType()
export class MarketWhereUniqueInput {
  @TypeGraphQLField(() => ID)
  id?: string;
}

@TypeGraphQLInputType()
export class MarketCreateInput {
  @TypeGraphQLField()
  marketId!: number;

  @TypeGraphQLField()
  creator!: string;

  @TypeGraphQLField()
  creation!: string;

  @TypeGraphQLField()
  oracle!: string;

  @TypeGraphQLField(() => GraphQLJSONObject)
  end!: JsonObject;

  @TypeGraphQLField()
  metadata!: string;

  @TypeGraphQLField(() => GraphQLJSONObject)
  marketType!: JsonObject;

  @TypeGraphQLField()
  block!: number;
}

@TypeGraphQLInputType()
export class MarketUpdateInput {
  @TypeGraphQLField({ nullable: true })
  marketId?: number;

  @TypeGraphQLField({ nullable: true })
  creator?: string;

  @TypeGraphQLField({ nullable: true })
  creation?: string;

  @TypeGraphQLField({ nullable: true })
  oracle?: string;

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  end?: JsonObject;

  @TypeGraphQLField({ nullable: true })
  metadata?: string;

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  marketType?: JsonObject;

  @TypeGraphQLField({ nullable: true })
  block?: number;
}

@ArgsType()
export class MarketWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => MarketWhereInput, { nullable: true })
  where?: MarketWhereInput;

  @TypeGraphQLField(() => MarketOrderByEnum, { nullable: true })
  orderBy?: MarketOrderByEnum[];
}

@ArgsType()
export class MarketCreateManyArgs {
  @TypeGraphQLField(() => [MarketCreateInput])
  data!: MarketCreateInput[];
}

@ArgsType()
export class MarketUpdateArgs {
  @TypeGraphQLField() data!: MarketUpdateInput;
  @TypeGraphQLField() where!: MarketWhereUniqueInput;
}

export enum ScalarMarketOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  oracle_ASC = "oracle_ASC",
  oracle_DESC = "oracle_DESC",

  end_ASC = "end_ASC",
  end_DESC = "end_DESC",

  creation_ASC = "creation_ASC",
  creation_DESC = "creation_DESC",

  block_ASC = "block_ASC",
  block_DESC = "block_DESC",
}

registerEnumType(ScalarMarketOrderByEnum, {
  name: "ScalarMarketOrderByInput",
});

@TypeGraphQLInputType()
export class ScalarMarketWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  oracle_eq?: string;

  @TypeGraphQLField({ nullable: true })
  oracle_contains?: string;

  @TypeGraphQLField({ nullable: true })
  oracle_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  oracle_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  oracle_in?: string[];

  @TypeGraphQLField(() => BigInt, { nullable: true })
  end_eq?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  end_gt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  end_gte?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  end_lt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  end_lte?: string;

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  end_in?: string[];

  @TypeGraphQLField({ nullable: true })
  creation_eq?: string;

  @TypeGraphQLField({ nullable: true })
  creation_contains?: string;

  @TypeGraphQLField({ nullable: true })
  creation_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  creation_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  creation_in?: string[];

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  outcomeRange_containsAll?: [string];

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  outcomeRange_containsNone?: [string];

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  outcomeRange_containsAny?: [string];

  @TypeGraphQLField(() => Int, { nullable: true })
  block_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  block_in?: number[];

  @TypeGraphQLField(() => ScalarMarketWhereInput, { nullable: true })
  AND?: [ScalarMarketWhereInput];

  @TypeGraphQLField(() => ScalarMarketWhereInput, { nullable: true })
  OR?: [ScalarMarketWhereInput];
}

@TypeGraphQLInputType()
export class ScalarMarketWhereUniqueInput {
  @TypeGraphQLField(() => ID)
  id?: string;
}

@TypeGraphQLInputType()
export class ScalarMarketCreateInput {
  @TypeGraphQLField()
  oracle!: string;

  @TypeGraphQLField()
  end!: string;

  @TypeGraphQLField()
  creation!: string;

  @TypeGraphQLField(() => [BigInt])
  outcomeRange!: string[];

  @TypeGraphQLField()
  block!: number;
}

@TypeGraphQLInputType()
export class ScalarMarketUpdateInput {
  @TypeGraphQLField({ nullable: true })
  oracle?: string;

  @TypeGraphQLField({ nullable: true })
  end?: string;

  @TypeGraphQLField({ nullable: true })
  creation?: string;

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  outcomeRange?: string[];

  @TypeGraphQLField({ nullable: true })
  block?: number;
}

@ArgsType()
export class ScalarMarketWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => ScalarMarketWhereInput, { nullable: true })
  where?: ScalarMarketWhereInput;

  @TypeGraphQLField(() => ScalarMarketOrderByEnum, { nullable: true })
  orderBy?: ScalarMarketOrderByEnum[];
}

@ArgsType()
export class ScalarMarketCreateManyArgs {
  @TypeGraphQLField(() => [ScalarMarketCreateInput])
  data!: ScalarMarketCreateInput[];
}

@ArgsType()
export class ScalarMarketUpdateArgs {
  @TypeGraphQLField() data!: ScalarMarketUpdateInput;
  @TypeGraphQLField() where!: ScalarMarketWhereUniqueInput;
}

export enum TransferOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  from_ASC = "from_ASC",
  from_DESC = "from_DESC",

  to_ASC = "to_ASC",
  to_DESC = "to_DESC",

  value_ASC = "value_ASC",
  value_DESC = "value_DESC",

  comment_ASC = "comment_ASC",
  comment_DESC = "comment_DESC",

  block_ASC = "block_ASC",
  block_DESC = "block_DESC",

  tip_ASC = "tip_ASC",
  tip_DESC = "tip_DESC",

  timestamp_ASC = "timestamp_ASC",
  timestamp_DESC = "timestamp_DESC",

  insertedAt_ASC = "insertedAt_ASC",
  insertedAt_DESC = "insertedAt_DESC",
}

registerEnumType(TransferOrderByEnum, {
  name: "TransferOrderByInput",
});

@TypeGraphQLInputType()
export class TransferWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField(() => Bytes, { nullable: true })
  from_eq?: string;

  @TypeGraphQLField(() => [Bytes], { nullable: true })
  from_in?: string[];

  @TypeGraphQLField(() => Bytes, { nullable: true })
  to_eq?: string;

  @TypeGraphQLField(() => [Bytes], { nullable: true })
  to_in?: string[];

  @TypeGraphQLField(() => BigInt, { nullable: true })
  value_eq?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  value_gt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  value_gte?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  value_lt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  value_lte?: string;

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  value_in?: string[];

  @TypeGraphQLField({ nullable: true })
  comment_eq?: string;

  @TypeGraphQLField({ nullable: true })
  comment_contains?: string;

  @TypeGraphQLField({ nullable: true })
  comment_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  comment_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  comment_in?: string[];

  @TypeGraphQLField(() => Int, { nullable: true })
  block_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  block_in?: number[];

  @TypeGraphQLField(() => BigInt, { nullable: true })
  tip_eq?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  tip_gt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  tip_gte?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  tip_lt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  tip_lte?: string;

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  tip_in?: string[];

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_eq?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_gt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_gte?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_lt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_lte?: string;

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  timestamp_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  insertedAt_eq?: DateTimeString;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  insertedAt_lt?: DateTimeString;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  insertedAt_lte?: DateTimeString;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  insertedAt_gt?: DateTimeString;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  insertedAt_gte?: DateTimeString;

  @TypeGraphQLField(() => TransferWhereInput, { nullable: true })
  AND?: [TransferWhereInput];

  @TypeGraphQLField(() => TransferWhereInput, { nullable: true })
  OR?: [TransferWhereInput];
}

@TypeGraphQLInputType()
export class TransferWhereUniqueInput {
  @TypeGraphQLField(() => ID)
  id?: string;
}

@TypeGraphQLInputType()
export class TransferCreateInput {
  @TypeGraphQLField()
  from!: string;

  @TypeGraphQLField()
  to!: string;

  @TypeGraphQLField()
  value!: string;

  @TypeGraphQLField({ nullable: true })
  comment?: string;

  @TypeGraphQLField()
  block!: number;

  @TypeGraphQLField()
  tip!: string;

  @TypeGraphQLField()
  timestamp!: string;

  @TypeGraphQLField(() => DateTime)
  insertedAt!: DateTimeString;
}

@TypeGraphQLInputType()
export class TransferUpdateInput {
  @TypeGraphQLField({ nullable: true })
  from?: string;

  @TypeGraphQLField({ nullable: true })
  to?: string;

  @TypeGraphQLField({ nullable: true })
  value?: string;

  @TypeGraphQLField({ nullable: true })
  comment?: string;

  @TypeGraphQLField({ nullable: true })
  block?: number;

  @TypeGraphQLField({ nullable: true })
  tip?: string;

  @TypeGraphQLField({ nullable: true })
  timestamp?: string;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  insertedAt?: DateTimeString;
}

@ArgsType()
export class TransferWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => TransferWhereInput, { nullable: true })
  where?: TransferWhereInput;

  @TypeGraphQLField(() => TransferOrderByEnum, { nullable: true })
  orderBy?: TransferOrderByEnum[];
}

@ArgsType()
export class TransferCreateManyArgs {
  @TypeGraphQLField(() => [TransferCreateInput])
  data!: TransferCreateInput[];
}

@ArgsType()
export class TransferUpdateArgs {
  @TypeGraphQLField() data!: TransferUpdateInput;
  @TypeGraphQLField() where!: TransferWhereUniqueInput;
}
