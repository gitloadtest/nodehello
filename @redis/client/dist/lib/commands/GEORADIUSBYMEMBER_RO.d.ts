import { RedisCommandArgument, RedisCommandArguments } from '.';
import { GeoSearchOptions, GeoUnits } from './generic-transformers';
export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
export declare function transformArguments(key: RedisCommandArgument, member: string, radius: number, unit: GeoUnits, options?: GeoSearchOptions): RedisCommandArguments;
export declare function transformReply(): Array<RedisCommandArgument>;
