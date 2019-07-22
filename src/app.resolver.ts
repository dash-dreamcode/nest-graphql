import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';
import {
  TopicsSearch,
  SavePortalInput,
  PortalSettings,
  Topics as TopicsType,
} from './GraphQL/graphql';
import { Topics, Content, portalSettings } from './data';

@Resolver('Portal')
export class AppResolver {
  @Query('getPortalSettings')
  getPortalSettings(@Args('portalId') portalId: string): PortalSettings {
    return portalSettings.find(item => item.id === portalId);
  }

  @Query('getTopics')
  async getTopics(
    @Args('search') search: TopicsSearch,
    @Args('first') first: number,
    @Args('after') after: string,
  ): Promise<Array<TopicsType>> {
    let req: [TopicsType] = [null];

    await Topics.filter(item => {
      return search.digitalAssetIds.forEach(asset => {
        if (item.phrase.includes(asset)) {
          req.push(item);
        }
      });
    });
    return req;
  }

  @Query('getContent')
  getContent() {
    return Content;
  }

  @Mutation('savePortal')
  async savePortal(
    @Args('portal')
    portal: SavePortalInput,
  ) {
    await portalSettings.push(portal as PortalSettings);
    return portal;
  }
}
