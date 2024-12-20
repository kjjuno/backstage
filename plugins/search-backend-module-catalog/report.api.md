## API Report File for "@backstage/plugin-search-backend-module-catalog"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="node" />

import { AuthService } from '@backstage/backend-plugin-api';
import { BackendFeature } from '@backstage/backend-plugin-api';
import { CatalogApi } from '@backstage/catalog-client';
import { CatalogCollatorEntityTransformer as CatalogCollatorEntityTransformer_2 } from '@backstage/plugin-search-backend-module-catalog';
import { CatalogEntityDocument } from '@backstage/plugin-catalog-common';
import { Config } from '@backstage/config';
import { DiscoveryService } from '@backstage/backend-plugin-api';
import { DocumentCollatorFactory } from '@backstage/plugin-search-common';
import { Entity } from '@backstage/catalog-model';
import { ExtensionPoint } from '@backstage/backend-plugin-api';
import { GetEntitiesRequest } from '@backstage/catalog-client';
import { Permission } from '@backstage/plugin-permission-common';
import { Readable } from 'stream';
import { TokenManager } from '@backstage/backend-common';

// @public (undocumented)
export type CatalogCollatorEntityTransformer = (
  entity: Entity,
) => Omit<CatalogEntityDocument, 'location' | 'authorization'>;

// @public
export type CatalogCollatorExtensionPoint = {
  setEntityTransformer(transformer: CatalogCollatorEntityTransformer_2): void;
};

// @public
export const catalogCollatorExtensionPoint: ExtensionPoint<CatalogCollatorExtensionPoint>;

// @public
const _default: BackendFeature;
export default _default;

// @public (undocumented)
export const defaultCatalogCollatorEntityTransformer: CatalogCollatorEntityTransformer;

// @public @deprecated
export class DefaultCatalogCollatorFactory implements DocumentCollatorFactory {
  // (undocumented)
  static fromConfig(
    configRoot: Config,
    options: DefaultCatalogCollatorFactoryOptions,
  ): DefaultCatalogCollatorFactory;
  // (undocumented)
  getCollator(): Promise<Readable>;
  // (undocumented)
  readonly type = 'software-catalog';
  // (undocumented)
  readonly visibilityPermission: Permission;
}

// @public @deprecated (undocumented)
export type DefaultCatalogCollatorFactoryOptions = {
  auth?: AuthService;
  discovery: DiscoveryService;
  tokenManager?: TokenManager;
  locationTemplate?: string;
  filter?: GetEntitiesRequest['filter'];
  batchSize?: number;
  catalogClient?: CatalogApi;
  entityTransformer?: CatalogCollatorEntityTransformer;
};
```
