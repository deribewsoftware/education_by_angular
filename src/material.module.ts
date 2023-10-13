import { NgModule } from "@angular/core";
import {  MatInputModule } from '@angular/material/input'
import {  MatSelectModule } from '@angular/material/select'
import {  MatRadioModule } from '@angular/material/radio'

import {  MatCheckboxModule } from '@angular/material/checkbox'
import {  MatCardModule } from '@angular/material/card'
import {  MatSortModule } from '@angular/material/sort'
import {  MatTableModule } from '@angular/material/table'
import {  MatDialogModule } from '@angular/material/dialog'
import {  MatMenuModule } from '@angular/material/menu'
import {  MatPaginatorModule } from '@angular/material/paginator'
import {MatTabsModule} from '@angular/material/tabs'
import {MatIconModule} from '@angular/material/icon'
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';




@NgModule({
  exports:[
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatChipsModule

  ]
})
export class MaterialModule {}
