import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ExpensesComponent } from './expenses/expenses.component';


const routes: Routes = [
    { path: '', redirectTo: 'expenses', pathMatch: 'full'},
    { path: 'expenses',    component: ExpensesComponent},
    { path: 'categories', component: AddCategoryComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }