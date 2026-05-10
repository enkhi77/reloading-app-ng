import {
  Component,
  inject,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { Brass } from './brass/brass';
import { BulletForm } from './bullet-form/bullet-form';
import { PowderForm } from './powder-form/powder-form';
import { PrimerForm } from './primer-form/primer-form';
import { InventoryTable } from '../inventory-table/inventory-table';
import { InventoryMenu, InventoryMode } from '../../enums/inventory';
import { Bullet, Powder, Primer } from '../../interfaces/inventory';
import { SimpleIdObject } from '../../interfaces/lists';
import { BulletService } from '../../services/bullet-service';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-inventory',
  imports: [
    Brass,
    BulletForm,
    FormsModule,
    InventoryTable,
    MatButton,
    MatIcon,
    MatTab,
    MatTabGroup,
    PowderForm,
    PrimerForm,
  ],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class Inventory implements OnChanges, OnInit {
  protected readonly InventoryMenu = InventoryMenu; // use enums in template
  protected readonly InventoryMode = InventoryMode; // use enums in template

  public inventoryMenu: SimpleIdObject[] = [
    {
      id: InventoryMenu.brass,
      name: 'Brass',
    },
    {
      id: InventoryMenu.bullets,
      name: 'Bullets',
    },
    {
      id: InventoryMenu.powders,
      name: 'Powders',
    },
    {
      id: InventoryMenu.primers,
      name: 'Primers',
    },
  ];
  public selectedIndex: InventoryMenu = InventoryMenu.bullets;
  public inventoryTableData: WritableSignal<Brass[] | Bullet[] | Powder[] | Primer[]> = signal([]);
  public viewMode: WritableSignal<InventoryMode> = signal(InventoryMode.view);

  private readonly bulletService: BulletService = inject(BulletService);

  public ngOnInit() {
    this.getBullets();
  }

  public ngOnChanges(changes: SimpleChanges<Inventory>) {
    // Changes for SelectedIndex
    if (
      changes &&
      !changes.selectedIndex?.isFirstChange() &&
      changes.selectedIndex?.currentValue !== undefined
    ) {
      switch (changes.selectedIndex.currentValue) {
        case InventoryMenu.brass:
          break;
        case InventoryMenu.bullets:
          this.getBullets();
          break;
        case InventoryMenu.powders:
          break;
        case InventoryMenu.primers:
          break;
        default:
          break;
      }
    }
  }

  public getBullets() {
    this.bulletService.getBullets().subscribe({
      next: (res) => {
        this.inventoryTableData.set(res);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  public changeViewMode(mode: InventoryMode, id?: string): void {
    this.viewMode.set(mode);
  }
}
