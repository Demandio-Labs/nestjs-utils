import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrefixedCacheManagerService } from './prefixed-cache-manager.service';
import { PrefixedCacheManagerFactory } from './prefixed-cache-manager.factory';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [PrefixedCacheManagerFactory, PrefixedCacheManagerService],
  exports: [PrefixedCacheManagerFactory, PrefixedCacheManagerService],
})
export class PrefixedCacheModule {}
