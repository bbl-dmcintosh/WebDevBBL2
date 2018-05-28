import { Component } from '@angular/core';

import { TransactionListPage } from '../transaction-list/transaction-list';
import { LogoffPage } from '../logoff/logoff';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TransactionListPage;
  tab3Root = LogoffPage;

  constructor() {

  }
}
