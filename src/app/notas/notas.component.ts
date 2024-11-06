import { Component } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';

export interface Alumno {
  nombre: string;
  apellido: string;
  nota: number;
}
const listaAlumnos: Alumno[] = [
  { nombre: "Pepe", apellido: 'Guzman', nota: 4.7 },
  { nombre: "Ana", apellido: 'López', nota: 7 },
  { nombre: "Julian", apellido: 'Guzman', nota: 6 }
];

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [
    MatFormField,
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatInput,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatLabel,
    MatSelect,
    MatOption,
    FormsModule,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent
  ],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
  columnas: string[] = ['nombre', 'apellido', 'nota', 'estado'];
  dataSource = new MatTableDataSource(listaAlumnos);
  nombre:string = '';
  apellido:string = '';
  nota:number = 0;

  private filterValue = '';
  private selectFilterValue = 'todos';

  filtro(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.applyFilters();
  }

  filtro2(event: any) {
    this.selectFilterValue = event.value;
    this.applyFilters();
  }

  applyFilters() {
    this.dataSource.filterPredicate = (data: Alumno) => {
      const matchesTextFilter = data.nombre.toLowerCase().includes(this.filterValue) ||
        data.apellido.toLowerCase().includes(this.filterValue);
      const matchesSelectFilter = this.selectFilterValue === 'todos' ||
        (this.selectFilterValue === 'aprobado' && data.nota >= 5) ||
        (this.selectFilterValue === 'suspenso' && data.nota < 5);
      return matchesTextFilter && matchesSelectFilter;
    };
    this.dataSource.filter = `${this.filterValue}${this.selectFilterValue}`;
  }

  nuevoAlumno() {
    const alumnoN:Alumno={nombre:this.nombre, apellido:this.apellido, nota:this.nota}
    listaAlumnos.push(alumnoN)
    this.dataSource = new MatTableDataSource(listaAlumnos);
  }
}
