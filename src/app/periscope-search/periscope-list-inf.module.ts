import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {DataTableModule, OverlayPanelModule} from 'primeng/primeng';
import {SliderModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {NgPipesModule} from 'ngx-pipes';
import {PagerService} from "../_services/paginator.service";
import {RoundpipeModule} from "../home/roundpipe.module";
import {PeriscopeListInfComponent} from './periscope-list-inf.component';
import {PeriScopeListInfRoutes} from './periscope-list-inf.routing';
import {InlineEditorModule} from "ng2-inline-editor";
import { CustomPipeModule } from './CustomPipe.module';


@NgModule({
    imports: [CommonModule,CustomPipeModule, RouterModule.forChild(PeriScopeListInfRoutes),ReactiveFormsModule,SliderModule,DataTableModule,InlineEditorModule,OverlayPanelModule,DialogModule,FormsModule,RoundpipeModule,NgPipesModule],
    declarations: [PeriscopeListInfComponent],
    providers:[PagerService]
})

export class PeriscopeListInfModule { }
