import { DocumentNode, SelectionSetNode } from 'graphql';
import { NormalizedCache, InMemoryCacheConfig } from './types';
import { KeyFieldsContext } from './policies';
import { FragmentRegistryAPI } from './fragmentRegistry';
import { Reference, StoreValue, StoreObject, DeepMerger, FragmentMap, FragmentMapFunction, isArray } from '../../utilities';
export declare const hasOwn: (v: PropertyKey) => boolean;
export declare function isNullish(value: any): value is null | undefined;
export { isArray };
export declare function defaultDataIdFromObject({ __typename, id, _id }: Readonly<StoreObject>, context?: KeyFieldsContext): string | undefined;
export declare function normalizeConfig(config: InMemoryCacheConfig): {
    dataIdFromObject: typeof defaultDataIdFromObject;
    addTypename: boolean;
    resultCaching: boolean;
    canonizeResults: boolean;
} & InMemoryCacheConfig;
export declare function shouldCanonizeResults(config: Pick<InMemoryCacheConfig, "canonizeResults">): boolean;
export declare function getTypenameFromStoreObject(store: NormalizedCache, objectOrReference: StoreObject | Reference): string | undefined;
export declare const TypeOrFieldNameRegExp: RegExp;
export declare function fieldNameFromStoreName(storeFieldName: string): string;
export declare function selectionSetMatchesResult(selectionSet: SelectionSetNode, result: Record<string, any>, variables?: Record<string, any>): boolean;
export declare function storeValueIsStoreObject(value: StoreValue): value is StoreObject;
export declare function makeProcessedFieldsMerger(): DeepMerger<any[]>;
export declare function extractFragmentContext(document: DocumentNode, fragments?: FragmentRegistryAPI): {
    fragmentMap: FragmentMap;
    lookupFragment: FragmentMapFunction;
};
//# sourceMappingURL=helpers.d.ts.map