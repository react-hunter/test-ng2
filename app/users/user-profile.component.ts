import { Component, Input } from '@angular/core';
import { User } from '../shared/models/user';

@Component ({
    selector: 'user-profile',
    templateUrl: './app/users/user-profile-template.html'
})

export class UserProfileComponent {
    @Input() user: User;
}