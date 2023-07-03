import { Injectable } from '@angular/core';
import { ApiService } from '.';

@Injectable()
export class AdminService {
  constructor(
    private apiService: ApiService
  ) {}

  getUsers(options: any) {
    return this.apiService.getWithOptions<any>('users', options);
  }

  getCustomerSupport(options: any) {
    return this.apiService.getWithOptions<any>('customer-support/admin/all', options);
  }

  getStatCard() {
    return this.apiService.get<any>('users/stat-card');
  }

  getUsersByMonth() {
    return this.apiService.get<any>('users/by-month');
  }

  getTransactionByMonth() {
    return this.apiService.get<any>('transaction/by-month');
  }
}