import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  // { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  // { path: 'pdf-editor', loadChildren: () => import('./pdf-editor/pdf-editor.module').then(m => m.PdfEditorModule) },
  // { path: 'preview', loadChildren: () => import('./pdf-editor/preview/preview.module').then(m => m.PreviewModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
