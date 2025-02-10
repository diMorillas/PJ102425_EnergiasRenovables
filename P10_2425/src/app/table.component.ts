import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Energia, Renovable, NoRenovable } from './models/energia.model';
import { energies } from './data/energias.data';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  energies: Energia[] = energies;
  displayedColumns: string[] = ['titulo', 'subtitulo', 'descripcion', 'costoDeUso', 'emisionesCo2'];
  
  // Fuente de datos para la tabla
  dataSource = new MatTableDataSource<Energia>(this.energies);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // Método para filtrar energías según su tipo
  filtrarPorTipo(tipo: 'renovable' | 'noRenovable' | 'todos') {
    if (tipo === 'renovable') {
      this.dataSource.data = this.energies.filter(energia => energia instanceof Renovable);
    } else if (tipo === 'noRenovable') {
      this.dataSource.data = this.energies.filter(energia => energia instanceof NoRenovable);
    } else {
      this.dataSource.data = this.energies; // Restaurar todos los datos
    }
  }
}
