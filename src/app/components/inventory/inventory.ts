import { Component, OnChanges, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { InventoryMenu, InventoryMode } from '../../enums/inventory';
import { SimpleIdObject } from '../../interfaces/lists';
import { BulletForm } from './bullet-form/bullet-form';
import { PowderForm } from './powder-form/powder-form';
import { PrimerForm } from './primer-form/primer-form';
import { Brass } from './brass/brass';
import { BulletService } from '../../services/bullet-service';
import { inject } from 'vitest';
import { TableData } from '../../interfaces/table-data';

@Component({
  selector: 'app-inventory',
  imports: [
    FormsModule,
    BulletForm,
    PowderForm,
    PrimerForm,
    Brass,
    MatTabGroup,
    MatTab,
    InventoryTable,
  ],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class Inventory implements OnChanges {
  public inventoryMenu: SimpleIdObject[] = [
    {
      id: 0,
      name: InventoryMenu.brass,
    },
    {
      id: 1,
      name: InventoryMenu.bullets,
    },
    {
      id: 2,
      name: InventoryMenu.powders,
    },
    {
      id: 3,
      name: InventoryMenu.primers,
    },
  ];
  public selectedIndex: number = 1;
  public inventoryTableData: TableData[] = [];
  public viewMode: WritableSignal<InventoryMode> = signal(InventoryMode.view);
  protected readonly InventoryMode = InventoryMode;

  private readonly bulletService: BulletService = inject(BulletService);

  public ngOnChanges(changes:SimpleChanges<Inventory>) {

    // Changes for SelectedIndex
    if (changes && !changes.selectedIndex?.isFirstChange() && changes.selectedIndex?.currentValue !== undefined) {
      console.log('selectedIndex', changes.selectedIndex.currentValue);
      switch (changes.selectedIndex.currentValue) {
        case 0:
          break;
        case 1:
          this.bulletService.getBullets()
            .subscribe((bullets: Bullet[]) => {
              this.inventoryTableData = bullets as TableData[];
            });
          break;
        case 2:
          break;
        case 3:
          break;
        default:
          break;
      }
    }
  }
}
