import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },

    {
        path: '', // This is dummy path. So if anybody use /members then it will call member child.
        // path: 'as' if anybody access localhost/asmembers then it will call members path.
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent },
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' } // wildcard routes.This should be last
                                    // because if its in 1st then it will match all routes and rest will
                                    // ignored. pathMatch: full means it will match with full URL.
];
