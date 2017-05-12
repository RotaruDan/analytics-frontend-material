import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CardClassComponent } from './card-class.component';
import { GamesService } from '../../../_services/games.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [CardClassComponent],
    exports: [CardClassComponent],
    providers: [GamesService]
})
export class CardClassModule { }
