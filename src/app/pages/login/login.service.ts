import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Response } from "src/app/core/response";
import { environment } from "src/app/environment/environment";

export interface LoginRequest {
    username: string;
    password: string;
}

@Injectable({
    providedIn: 'root',
})
export class LoginService {

    WEB_PATH = environment.WEB_ENDPOINT;

    readonly LOGIN = 'auth/login';

    constructor(
        private http:HttpClient
    ){}



    login(request: LoginRequest) {
        return this.http.post<Response>(this.WEB_PATH + '/' + this.LOGIN, request);
    }

}
