(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6/Ab":function(e,t,o){"use strict";o.r(t),o.d(t,"EmployeeModule",function(){return U});var s=o("3Pt+"),i=o("ofXK"),r=o("tyNb"),a=o("fXoL"),l=o("JIr8"),m=o("AytR"),c=o("2Vo4"),b=o("z6cu"),n=o("tk/3"),p=o("5eHb");let d=(()=>{class e{constructor(e,t){this.http=e,this.toastr=t,this.EmployeeSubject=new c.a([])}GetEmployee(){this.http.get(m.a.apiUrl+"Admin/GetEmployees").subscribe(e=>{this.EmployeeSubject.next(e)})}AddEmployee(e){this.http.post(m.a.apiUrl+"Admin/AddEmployee",e).pipe(Object(l.a)(e=>Object(b.a)(e))).subscribe(e=>{let t=this.EmployeeSubject.value;t.push(e),this.EmployeeSubject.next(t),this.toastr.success("Employee Added Successfully")})}DeleteEmployee(e){this.http.delete(m.a.apiUrl+"Admin/DeleteEmployee/employeeId?employeeId="+e).pipe(Object(l.a)(e=>Object(b.a)(e))).subscribe(t=>{let o=this.EmployeeSubject.value;const s=o.findIndex(t=>t.id==e);o.splice(s,1),this.EmployeeSubject.next(o),this.toastr.success("Employee Deleted Successfully")})}UpdatePassword(e){this.http.patch(m.a.apiUrl+"Admin/UpdatePassword",e).pipe(Object(l.a)(e=>(this.toastr.error("Error While Updating Password"),Object(b.a)(e)))).subscribe(e=>{this.toastr.success("Password Update Successfuly")})}UpdateEmployee(e){this.http.patch(m.a.apiUrl+"Admin/UpdateEmployee",e).pipe(Object(l.a)(e=>(this.toastr.error("Error While Updating Employee"),Object(b.a)(e)))).subscribe(t=>{let o=this.EmployeeSubject.value;const s=o.findIndex(t=>t.id==e.id);o[s]=e,this.EmployeeSubject.next(o),this.toastr.success("Employee Updated Successfuly")})}}return e.\u0275fac=function(t){return new(t||e)(a.Xb(n.b),a.Xb(p.b))},e.\u0275prov=a.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class u{constructor(e){this.firstName=e.firstName,this.lastName=e.lastName,this.userName=e.userName,this.password=e.password}}class y extends u{constructor(e){super(e),this.id=e.id}UpdateEmployee(e){this.firstName=e.firstName,this.lastName=e.lastName,this.userName=e.userName}}var h=o("1kSV");let f=(()=>{class e{constructor(e,t){this.activeModal=e,this.formBuilder=t,this.EmployeeUpdateForm=this.formBuilder.group({firstName:["",[s.s.required,s.s.minLength(3)]],lastName:["",[s.s.required,s.s.minLength(3)]],userName:["",[s.s.required,s.s.minLength(4)]]})}ngOnInit(){this.EmployeeUpdateForm.patchValue(this.EmployeeToUpdate)}Submit(){this.EmployeeToUpdate=new y(this.EmployeeToUpdate),this.EmployeeToUpdate.UpdateEmployee(this.EmployeeUpdateForm.value),this.activeModal.close(this.EmployeeToUpdate)}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(h.a),a.Kb(s.c))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-update-employee-form"]],inputs:{EmployeeToUpdate:"EmployeeToUpdate"},decls:15,vars:2,consts:[[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],["type","text","name","firstName","placeholder","First Name","formControlName","firstName",1,"form-control"],["type","text","name","lastName","placeholder","Last Name","formControlName","lastName",1,"form-control"],["type","text","name","userName","placeholder","User Name","formControlName","userName",1,"form-control"],[1,"modal-footer"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(e,t){1&e&&(a.Qb(0,"div",0),a.Qb(1,"h5",1),a.Cc(2,"Employee"),a.Pb(),a.Qb(3,"button",2),a.ac("click",function(){return t.activeModal.dismiss("Close click")}),a.Pb(),a.Pb(),a.Qb(4,"div",3),a.Qb(5,"form",4),a.ac("ngSubmit",function(){return t.Submit()}),a.Qb(6,"div",5),a.Lb(7,"input",6),a.Pb(),a.Qb(8,"div",5),a.Lb(9,"input",7),a.Pb(),a.Qb(10,"div",5),a.Lb(11,"input",8),a.Pb(),a.Qb(12,"div",9),a.Qb(13,"button",10),a.Cc(14,"Add"),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&e&&(a.yb(5),a.kc("formGroup",t.EmployeeUpdateForm),a.yb(8),a.kc("disabled",!t.EmployeeUpdateForm.valid))},directives:[s.t,s.k,s.e,s.b,s.j,s.d],styles:[""]}),e})(),E=(()=>{class e{constructor(e,t){this.formBuilder=e,this.activeModal=t,this.EmployeeForm=this.formBuilder.group({firstName:["",[s.s.required,s.s.minLength(3)]],lastName:["",[s.s.required,s.s.minLength(3)]],userName:["",[s.s.required,s.s.minLength(4)]],password:["",[s.s.required,s.s.minLength(6)]]})}ngOnInit(){}Submit(){this.activeModal.close(this.EmployeeForm.value)}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(s.c),a.Kb(h.a))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-employee-form"]],inputs:{Employee:"Employee"},decls:17,vars:2,consts:[[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],["type","text","name","firstName","placeholder","First Name","formControlName","firstName",1,"form-control"],["type","text","name","lastName","placeholder","Last Name","formControlName","lastName",1,"form-control"],["type","text","name","userName","placeholder","User Name","formControlName","userName",1,"form-control"],["type","password","name","password","placeholder","password","formControlName","password",1,"form-control"],[1,"modal-footer"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(e,t){1&e&&(a.Qb(0,"div",0),a.Qb(1,"h5",1),a.Cc(2,"Employee"),a.Pb(),a.Qb(3,"button",2),a.ac("click",function(){return t.activeModal.dismiss("Close click")}),a.Pb(),a.Pb(),a.Qb(4,"div",3),a.Qb(5,"form",4),a.ac("ngSubmit",function(){return t.Submit()}),a.Qb(6,"div",5),a.Lb(7,"input",6),a.Pb(),a.Qb(8,"div",5),a.Lb(9,"input",7),a.Pb(),a.Qb(10,"div",5),a.Lb(11,"input",8),a.Pb(),a.Qb(12,"div",5),a.Lb(13,"input",9),a.Pb(),a.Qb(14,"div",10),a.Qb(15,"button",11),a.Cc(16,"Add"),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&e&&(a.yb(5),a.kc("formGroup",t.EmployeeForm),a.yb(10),a.kc("disabled",!t.EmployeeForm.valid))},directives:[s.t,s.k,s.e,s.b,s.j,s.d],styles:[""]}),e})();var P=o("d2bA");function w(e,t){if(1&e){const e=a.Rb();a.Qb(0,"tr"),a.Qb(1,"th",7),a.Cc(2),a.Pb(),a.Qb(3,"td"),a.Cc(4),a.Pb(),a.Qb(5,"td"),a.Cc(6),a.Pb(),a.Qb(7,"td"),a.Qb(8,"button",8),a.ac("click",function(){a.uc(e);const o=t.$implicit;return a.ec().DeleteEmployee(o.id)}),a.Cc(9,"Delete"),a.Pb(),a.Qb(10,"button",9),a.ac("click",function(){a.uc(e);const o=t.$implicit;return a.ec().UpdateEmployee(o)}),a.Cc(11,"Update"),a.Pb(),a.Pb(),a.Qb(12,"td"),a.Qb(13,"button",9),a.ac("click",function(){a.uc(e);const o=t.$implicit,s=a.ec(),i=a.tc(25);return s.SetPasswordId(o.id),s.open(i)}),a.Cc(14,"Update"),a.Pb(),a.Pb(),a.Pb()}if(2&e){const e=t.$implicit;a.yb(2),a.Dc(e.firstName),a.yb(2),a.Dc(e.lastName),a.yb(2),a.Dc(e.userName)}}function S(e,t){if(1&e){const e=a.Rb();a.Qb(0,"div",10),a.Qb(1,"h4",11),a.Cc(2,"Update Password"),a.Pb(),a.Qb(3,"button",12),a.ac("click",function(){return t.$implicit.dismiss("Cross click")}),a.Qb(4,"span",13),a.Cc(5,"\xd7"),a.Pb(),a.Pb(),a.Pb(),a.Qb(6,"div",14),a.Qb(7,"form",null,15),a.Lb(9,"input",16,17),a.Pb(),a.Pb(),a.Qb(11,"div",18),a.Qb(12,"button",19),a.ac("click",function(){a.uc(e);const o=t.$implicit,s=a.tc(8);return a.ec().UpdatePassword(s),o.close("Save click")}),a.Cc(13,"Update"),a.Pb(),a.Pb()}if(2&e){const e=a.tc(8);a.yb(12),a.kc("disabled",e.invalid)}}let v=(()=>{class e{constructor(e){this.modalService=e,this.EmployeeSubmit=new a.n,this.DeleteSubmit=new a.n,this.NewPasswordSubmit=new a.n,this.UpdateEmployeeSubmit=new a.n}ngOnInit(){}open(e){this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then(e=>{this.closeResult=`Closed with: ${e}`},e=>{this.closeResult=e})}AddEmployee(){this.modalService.open(E).result.then(e=>{this.EmployeeSubmit.emit(new u(e))})}DeleteEmployee(e){this.modalService.open(P.a).result.then(t=>{this.DeleteSubmit.emit(e)},e=>{})}SetPasswordId(e){this.PasswordId="",this.PasswordId=e}UpdatePassword(e){this.NewPasswordSubmit.emit({id:this.PasswordId,password:e.value.password})}UpdateEmployee(e){const t=this.modalService.open(f);t.componentInstance.EmployeeToUpdate=e,t.result.then(e=>{this.UpdateEmployeeSubmit.emit(e)},e=>{})}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(h.h))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-employee-page"]],inputs:{Employees:"Employees"},outputs:{EmployeeSubmit:"EmployeeSubmit",DeleteSubmit:"DeleteSubmit",NewPasswordSubmit:"NewPasswordSubmit",UpdateEmployeeSubmit:"UpdateEmployeeSubmit"},decls:26,vars:1,consts:[[1,"prod"],[1,"text-center"],[1,"btn","btn-primary",3,"click"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],["content",""],["scope","row"],["type","button","role","button",1,"btn","btn-outline-dark","mr-1",3,"click"],["type","button","role","button",1,"btn","btn-outline-dark",3,"click"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["f","ngForm"],["type","text","name","password","placeholder","Password","ngModel","","required","","minlength","6"],["password","ngModel"],[1,"modal-footer"],["type","submit",1,"btn","btn-outline-dark",3,"disabled","click"]],template:function(e,t){1&e&&(a.Qb(0,"div",0),a.Lb(1,"br"),a.Lb(2,"br"),a.Lb(3,"br"),a.Qb(4,"div",1),a.Qb(5,"button",2),a.ac("click",function(){return t.AddEmployee()}),a.Cc(6,"Add Employee"),a.Pb(),a.Pb(),a.Lb(7,"br"),a.Lb(8,"br"),a.Qb(9,"table",3),a.Qb(10,"thead"),a.Qb(11,"tr"),a.Qb(12,"th",4),a.Cc(13,"First Name"),a.Pb(),a.Qb(14,"th",4),a.Cc(15,"Last Name"),a.Pb(),a.Qb(16,"th",4),a.Cc(17,"User Name"),a.Pb(),a.Qb(18,"th",4),a.Cc(19,"Actions"),a.Pb(),a.Qb(20,"th",4),a.Cc(21,"Password"),a.Pb(),a.Pb(),a.Pb(),a.Qb(22,"tbody"),a.Ac(23,w,15,3,"tr",5),a.Pb(),a.Pb(),a.Pb(),a.Ac(24,S,14,1,"ng-template",null,6,a.Bc)),2&e&&(a.yb(23),a.kc("ngForOf",t.Employees))},directives:[i.l,s.t,s.k,s.l,s.b,s.j,s.m,s.q,s.g],styles:[""]}),e})();const N=[{path:"",component:(()=>{class e{constructor(e){this.service=e}ngOnInit(){this.service.EmployeeSubject.asObservable().subscribe(e=>{this.Employees=e}),this.service.GetEmployee()}EmployeeSubmitted(e){this.service.AddEmployee(e)}DeleteSubmitted(e){this.service.DeleteEmployee(e)}NewPasswordSubmitted(e){this.service.UpdatePassword(e)}UpdateEmployeeSubmitted(e){this.service.UpdateEmployee(e)}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(d))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-employee"]],decls:1,vars:1,consts:[[3,"Employees","UpdateEmployeeSubmit","NewPasswordSubmit","DeleteSubmit","EmployeeSubmit"]],template:function(e,t){1&e&&(a.Qb(0,"app-employee-page",0),a.ac("UpdateEmployeeSubmit",function(e){return t.UpdateEmployeeSubmitted(e)})("NewPasswordSubmit",function(e){return t.NewPasswordSubmitted(e)})("DeleteSubmit",function(e){return t.DeleteSubmitted(e)})("EmployeeSubmit",function(e){return t.EmployeeSubmitted(e)}),a.Pb()),2&e&&a.kc("Employees",t.Employees)},directives:[v],styles:[""]}),e})()}];let Q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({imports:[[r.c.forChild(N)],r.c]}),e})(),U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({imports:[[i.b,Q,s.f,s.p]]}),e})()}}]);