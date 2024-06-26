import {Injectable, Inject} from '@angular/core';

import {Villain} from './villain';
import {ApiConfig} from '../../core/models/api-config';
import {BaseService} from '../../core/services/base.service';
import {CommonUtil} from '../../core/utilities/common.util';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VillainService extends BaseService<Villain> {
  constructor(protected http: HttpClient, @Inject('api.config') protected apiConfig: ApiConfig) {
    super(http);
	console.log("VillainService constructor:"+JSON.stringify(http));
	console.log("VillainService constructor:"+JSON.stringify(apiConfig));
  }

  public getServiceUrl(): string {
  console.log("getServiceUrl VillainService:"+CommonUtil.getApiUrl('VILLAINS_SERVICE_URL', this.apiConfig));
    return CommonUtil.getApiUrl('VILLAINS_SERVICE_URL', this.apiConfig);
  }
}
