import { Component, input, Input } from '@angular/core';
import { TableData } from '../../interfaces/table-data';

@Component({
  selector: 'app-inventory-table',
  imports: [],
  templateUrl: './inventory-table.html',
  styleUrl: './inventory-table.css',
})
export class InventoryTable {
  readonly tableData = input<TableData>();
}
