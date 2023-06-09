import { RedisCommandArgument, RedisCommandArguments } from '.';
export declare const FIRST_KEY_INDEX = 1;
export declare function transformArguments(key: RedisCommandArgument, member: RedisCommandArgument | Array<RedisCommandArgument>): RedisCommandArguments;
export declare function transformReply(): number;
