import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: "Home", url: "/homepage", icon: "mail"},
    { title: "Chimpanzee", url: "/second", icon: "mail"},
    { title: "Orangutan", url: "/third", icon: "mail"},
    { title: "Baboon", url: "/fourth", icon: "mail"}
 ];
 constructor() {}
}
