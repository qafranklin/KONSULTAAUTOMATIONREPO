import { Locator, Page } from '@playwright/test';

export class login {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginbutton: Locator;
  readonly navigatepage: string;

   constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#email');
    this.password = page.locator('#password');
    this.loginbutton = page.locator('button[type="submit"]');
    this.navigatepage = 'https://beacon-accountweb-dev.azurewebsites.net/login';
  }
  
  async goto() {
    await this.page.goto(this.navigatepage);
    await this.page.waitForLoadState('networkidle');
  }
   async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginbutton.click();
  }
}
  export class userprofile {
  readonly page: Page;
  readonly navsecman: Locator;
  readonly secsett: Locator;
  readonly edit: Locator;
  readonly middlename: Locator;
  readonly save: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.navsecman = page.getByRole('button', { name: 'Business Logo Security' });
    this.secsett = page.getByRole('button', { name: 'Security Settings' });
    this.edit = page.getByRole('button', { name: 'Edit' });
    this.middlename = page.locator('input[name="middleName"]');
    this.save = page.getByRole('button', { name: 'Save' });

  }

  async gotoedit() {
    await this.navsecman.click();
    await this.secsett.click();
    await this.edit.click();
  }

  async editprofile() {
    const randomName: string = Math.random().toString(36).substring(2, 7);
    await this.middlename.fill(randomName);
    await this.save.click();
    console.log('Middle name changed to: ' + randomName);

}
  }