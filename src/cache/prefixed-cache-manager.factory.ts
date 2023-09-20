import { ConfigService } from '@nestjs/config';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { PrefixedCacheManagerService } from './prefixed-cache-manager.service';

export const PrefixedCacheManagerFactory = {
  provide: PrefixedCacheManagerService,
  useFactory: (cacheManager: Cache, configService: ConfigService) => {
    const prefix = configService.get<string>('CACHE_PREFIX');
    return new PrefixedCacheManagerService(cacheManager, prefix);
  },
  inject: [CACHE_MANAGER, ConfigService],
};
