import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class PrefixedCacheManagerService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly prefix: string,
  ) {}

  async get<T>(key: string): Promise<T | undefined> {
    const prefixedKey = this.getPrefixedKey(key);
    return await this.cacheManager.get<T>(prefixedKey);
  }

  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    const prefixedKey = this.getPrefixedKey(key);
    await this.cacheManager.set(prefixedKey, value, ttl);
  }

  private getPrefixedKey(key: string): string {
    return `${this.prefix}:${key}`;
  }
}
