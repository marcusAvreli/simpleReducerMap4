import {Injectable, Inject} from '@angular/core';

import {Rprt} from './rprt';
import {ApiConfig} from '../../core/models/api-config';
import {BaseService} from '../../core/services/base.service';
import {CommonUtil} from '../../core/utilities/common.util';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RprtService extends BaseService<Rprt> {
  constructor(protected http: HttpClient, @Inject('api.config') protected apiConfig: ApiConfig) {
    super(http);
	console.log("VillainService constructor:"+JSON.stringify(http));
	console.log("VillainService constructor:"+JSON.stringify(apiConfig));
  }

  public getServiceUrl(): string {
  console.log("getServiceUrl VillainService:"+CommonUtil.getApiUrl('RPRTS_SERVICE_URL', this.apiConfig));
    return CommonUtil.getApiUrl('RPRTS_SERVICE_URL', this.apiConfig);
  }
}
