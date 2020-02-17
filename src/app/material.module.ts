import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input/";
import { MatCardModule } from "@angular/material/card/";
import { MatDividerModule } from "@angular/material/divider";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  imports: [
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSelectModule
  ]
})
export class MaterialModule {}
