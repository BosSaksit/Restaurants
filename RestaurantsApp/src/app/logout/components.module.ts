import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { LogoutComponent } from "./logout.component";

@NgModule({
    declarations:[LogoutComponent],
    exports:[LogoutComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]

})
export class ComponentsModule{}