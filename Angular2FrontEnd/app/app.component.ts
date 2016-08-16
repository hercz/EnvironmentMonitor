/**
 * Created by herczkumihalybalazs on 2016.08.15..
 */


import {Component, OnInit} from "@angular/core";
import {AppComponentService} from "./app.component.service";
import {EnvironmentData} from "./EnvironmentData";


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [AppComponentService]
})
export class AppComponent implements OnInit{


    environmentData: EnvironmentData = new EnvironmentData;
    errorMessage: string;

    constructor(private appComponentService: AppComponentService) {
    };

    ngOnInit(){
        this.getDataFromServer();
    }


    getDataFromServer() {
        this.appComponentService.getDataFromServer()
            .then(
                environmentData =>
                    this.environmentData = environmentData,
                error => this.errorMessage = <any>error);
    }

    logDataToConsole() {
        this.getDataFromServer();
    }
}