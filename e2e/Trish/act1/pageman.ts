import { Page } from '@playwright/test';
import { login } from './pageobj';
import { userprofile } from './pageobj';

export class PageManager {
  private page: Page;
  private login: login;
  private userprofile: userprofile;


constructor(page: Page) {
    this.page = page;
    this.login = new login(this.page);
    this.userprofile = new userprofile(this.page);
}
public getLogin(){
    return this.login;
}
public getUserProfile(){
    return this.userprofile;  
}
}