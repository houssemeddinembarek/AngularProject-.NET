export class LoginModel{
    username:string;
    password:string;
    constructor(data:any){
        this.username = data.username;
        this.password = data.password;
    }
}
export class LoginInfo{
    accessToken:string;
    role:string;
    refreshToken:string;
}