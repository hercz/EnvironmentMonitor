/**
 * Created by herczkumihalybalazs on 2016.08.15..
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {EnvironmentData} from "./EnvironmentData";
import "./rxjs-operators";



@Injectable()
export class AppComponentService {
    constructor(private http: Http) {
    }

    private dataSourceUrl = 'http://192.168.150.17:8081/environmentdata';  // URL to web API

    getDataFromServer(): Promise<EnvironmentData> {
        return this.http.get(this.dataSourceUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }

}