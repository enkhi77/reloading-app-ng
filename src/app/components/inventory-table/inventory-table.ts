import { Component, effect, input } from '@angular/core';
import { MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef, MatTable } from '@angular/material/table';
import { InventoryMenu } from '../../enums/inventory';
import { ColumnDefinition } from '../../interfaces/table-data';
import { Brass } from '../inventory/brass/brass';
import { Bullet, Powder, Primer } from '../../interfaces/inventory';

@Component({
  selector: 'app-inventory-table',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
  ],
  templateUrl: './inventory-table.html',
  styleUrl: './inventory-table.css',
})
export class InventoryTable {
  public displayedColumns: string[] = [];
  public columnDefinitions: ColumnDefinition[] = [];

  readonly tableData = input.required<Brass[] | Bullet[] | Powder[] | Primer[]>();
  readonly type = input.required<InventoryMenu>();

  constructor() {
    effect(() => {
      switch (this.type()) {
        case InventoryMenu.brass:
          this.displayedColumns = ['headStamp', 'rangeBrass'];
          this.columnDefinitions = [
            { columnDef: 'headStamp', displayName: 'Head Stamp' },
            { columnDef: 'rangeBrass', displayName: 'Range Brass?' },
          ];
          break;
        case InventoryMenu.bullets:
          this.displayedColumns = [
            'caliber',
            'datePurchased',
            'diameter',
            'lot',
            'manufacturer',
            'price',
            'weight',
          ];
          this.columnDefinitions = [
            { columnDef: 'caliber', displayName: 'Caliber' },
            { columnDef: 'datePurchased', displayName: 'Date Purchased' },
            { columnDef: 'diameter', displayName: 'Diameter' },
            { columnDef: 'lot', displayName: 'Lot' },
            { columnDef: 'manufacturer', displayName: 'Manufacturer' },
            { columnDef: 'price', displayName: 'Price' },
            { columnDef: 'weight', displayName: 'Weight' },
          ];
          break;
        case InventoryMenu.powders:
          this.displayedColumns = [];
          this.columnDefinitions = [
            { columnDef: 'lot', displayName: 'Lot' },
            { columnDef: 'manufacturer', displayName: 'Manufacturer' },
            { columnDef: 'name', displayName: 'Name' },
            { columnDef: 'price', displayName: 'Price' },
            { columnDef: 'vol', displayName: 'VOL' },
            { columnDef: 'weight', displayName: 'Weight' },
          ];
          break;
        case InventoryMenu.primers:
          this.displayedColumns = [];
          this.columnDefinitions = [
            { columnDef: 'name', displayName: 'Name' },
            { columnDef: 'manufacturer', displayName: 'Manufacturer' },
            { columnDef: 'price', displayName: 'Price' },
            { columnDef: 'type', displayName: 'Type' },
            { columnDef: 'datePurchased', displayName: 'Date Purchased' },
          ];
          break;
        default:
          this.displayedColumns = [];
          break;
      }
    });
  }

  private setupColumns() {}
}
