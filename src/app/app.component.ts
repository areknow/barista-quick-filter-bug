import { Component } from '@angular/core';
import { isObject } from '@dynatrace/barista-components/core';
import {
  DtQuickFilterDefaultDataSource,
  DtQuickFilterDefaultDataSourceConfig,
} from '@dynatrace/barista-components/experimental/quick-filter';

export const FILTER_FIELD_CONFIG = {
  autocomplete: [
    {
      name: 'Account type',
      distinct: true,
      autocomplete: [{ name: 'a'},{ name: 'b'},{ name: 'c'}]
    },
    {
      name: 'Support type',
      distinct: true,
      autocomplete: [{ name: 'x'},{ name: 'y'},{ name: 'z'}]
    }
  ]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /** configuration for the quick filter */
  private config: DtQuickFilterDefaultDataSourceConfig = {
    // Method to decide if a node should be displayed in the quick filter
    showInSidebar: (node) =>
      isObject(node) && node.name && node.name !== 'Not in Quickfilter',
  };

  filterSource = new DtQuickFilterDefaultDataSource(
    FILTER_FIELD_CONFIG,
    this.config,
  );

  fakeFilters = [
    [
      { name: 'Group 1', distinct: true, autocomplete: [{ name: 'a' }, { name: 'b' }, { name: 'c' }] },
      { name: 'b' }
    ],
    [
      { name: 'Group 2', distinct: true, autocomplete: [{ name: 'x' }, { name: 'y' }, { name: 'z' }] },
      { name: 'y' }
    ]
  ];
}
