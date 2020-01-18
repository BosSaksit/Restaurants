import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { TestComponent } from "./test.component";

@NgModule({
    declarations:[TestComponent],
    exports:[TestComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]

})
export class ComponentsModule{}