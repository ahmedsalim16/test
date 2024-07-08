import './polyfills.server.mjs';
import{A as R,B as _e,C as D,D as Ce,E as d,F as p,G as v,H as _,I as C,J as S,L as Ve,Q as De,S as be,T as te,V as Me,W as Ee,X as Ae,_ as Fe,a as ue,b as ce,c as he,ca as we,d as w,e as ee,f as m,fa as Se,g as A,ga as ne,h as B,i as g,j as y,k as f,l as fe,m as pe,n as me,o as x,p as N,q as L,r as h,s as c,t as O,u as E,v as ge,w as ye,x as ve,y as s,z as a}from"./chunk-WDHBLHLV.mjs";import{a as M,b as F}from"./chunk-VVCT4QZE.mjs";var U=class{};var H=(()=>{let e=class e{constructor(){this.studentList=[]}deleteStudent(n){let i=this.studentList.findIndex(o=>o.id===n);i!==-1&&this.studentList.splice(i,1),console.log(i)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=ee({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Be=(()=>{let e=class e{constructor(n,i){this._renderer=n,this._elementRef=i,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,i){this._renderer.setProperty(this._elementRef.nativeElement,n,i)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(i){return new(i||e)(c(O),c(N))},e.\u0275dir=f({type:e});let t=e;return t})(),z=(()=>{let e=class e extends Be{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=x(e)))(o||e)}})(),e.\u0275dir=f({type:e,features:[E]});let t=e;return t})(),j=new A("");var lt={provide:j,useExisting:w(()=>Z),multi:!0};function dt(){let t=te()?te().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var ut=new A(""),Z=(()=>{let e=class e extends Be{constructor(n,i,o){super(n,i),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!dt())}writeValue(n){let i=n??"";this.setProperty("value",i)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(i){return new(i||e)(c(O),c(N),c(ut,8))},e.\u0275dir=f({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&D("input",function(l){return o._handleInput(l.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(l){return o._compositionEnd(l.target.value)})},features:[S([lt]),E]});let t=e;return t})();var ct=new A(""),ht=new A("");function Le(t){return t!=null}function Re(t){return Ve(t)?ue(t):t}function Ue(t){let e={};return t.forEach(r=>{e=r!=null?M(M({},e),r):e}),Object.keys(e).length===0?null:e}function He(t,e){return e.map(r=>r(t))}function ft(t){return!t.validate}function We(t){return t.map(e=>ft(e)?e:r=>e.validate(r))}function pt(t){if(!t)return null;let e=t.filter(Le);return e.length==0?null:function(r){return Ue(He(r,e))}}function $e(t){return t!=null?pt(We(t)):null}function mt(t){if(!t)return null;let e=t.filter(Le);return e.length==0?null:function(r){let n=He(r,e).map(Re);return he(n).pipe(ce(Ue))}}function qe(t){return t!=null?mt(We(t)):null}function xe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function gt(t){return t._rawValidators}function yt(t){return t._rawAsyncValidators}function ie(t){return t?Array.isArray(t)?t:[t]:[]}function $(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ne(t,e){let r=ie(e);return ie(t).forEach(i=>{$(r,i)||r.push(i)}),r}function Oe(t,e){return ie(e).filter(r=>!$(t,r))}var q=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=$e(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=qe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,r){return this.control?this.control.hasError(e,r):!1}getError(e,r){return this.control?this.control.getError(e,r):null}},re=class extends q{get formDirective(){return null}get path(){return null}},T=class extends q{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},oe=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},vt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},mn=F(M({},vt),{"[class.ng-submitted]":"isSubmitted"}),ze=(()=>{let e=class e extends oe{constructor(n){super(n)}};e.\u0275fac=function(i){return new(i||e)(c(T,2))},e.\u0275dir=f({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&ve("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[E]});let t=e;return t})();var P="VALID",W="INVALID",I="PENDING",k="DISABLED";function _t(t){return(X(t)?t.validators:t)||null}function Ct(t){return Array.isArray(t)?$e(t):t||null}function Vt(t,e){return(X(e)?e.asyncValidators:t)||null}function Dt(t){return Array.isArray(t)?qe(t):t||null}function X(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var se=class{constructor(e,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===P}get invalid(){return this.status===W}get pending(){return this.status==I}get disabled(){return this.status===k}get enabled(){return this.status!==k}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ne(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ne(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Oe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Oe(e,this._rawAsyncValidators))}hasValidator(e){return $(this._rawValidators,e)}hasAsyncValidator(e){return $(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=I,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=k,this.errors=null,this._forEachChild(n=>{n.disable(F(M({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(F(M({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=P,this._forEachChild(n=>{n.enable(F(M({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(F(M({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===P||this.status===I)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?k:P}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=I,this._hasOwnPendingAsyncValidator=!0;let r=Re(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,r={}){this.errors=e,this._updateControlsErrors(r.emitEvent!==!1)}get(e){let r=e;return r==null||(Array.isArray(r)||(r=r.split(".")),r.length===0)?null:r.reduce((n,i)=>n&&n._find(i),this)}getError(e,r){let n=r?this.get(r):this;return n&&n.errors?n.errors[e]:null}hasError(e,r){return!!this.getError(e,r)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new L,this.statusChanges=new L}_calculateStatus(){return this._allControlsDisabled()?k:this.errors?W:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(I)?I:this._anyControlsHaveStatus(W)?W:P}_anyControlsHaveStatus(e){return this._anyControls(r=>r.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){X(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let r=this._parent&&this._parent.dirty;return!e&&!!r&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ct(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Dt(this._rawAsyncValidators)}};var ae=new A("CallSetDisabledState",{providedIn:"root",factory:()=>Y}),Y="always";function bt(t,e){return[...e.path,t]}function Mt(t,e,r=Y){At(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||r==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Ft(t,e),St(t,e),wt(t,e),Et(t,e)}function Pe(t,e){t.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(e)})}function Et(t,e){if(e.valueAccessor.setDisabledState){let r=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(r),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(r)})}}function At(t,e){let r=gt(t);e.validator!==null?t.setValidators(xe(r,e.validator)):typeof r=="function"&&t.setValidators([r]);let n=yt(t);e.asyncValidator!==null?t.setAsyncValidators(xe(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let i=()=>t.updateValueAndValidity();Pe(e._rawValidators,i),Pe(e._rawAsyncValidators,i)}function Ft(t,e){e.valueAccessor.registerOnChange(r=>{t._pendingValue=r,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ze(t,e)})}function wt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ze(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Ze(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function St(t,e){let r=(n,i)=>{e.valueAccessor.writeValue(n),i&&e.viewToModelUpdate(n)};t.registerOnChange(r),e._registerOnDestroy(()=>{t._unregisterOnChange(r)})}function It(t,e){if(!t.hasOwnProperty("model"))return!1;let r=t.model;return r.isFirstChange()?!0:!Object.is(e,r.currentValue)}function xt(t){return Object.getPrototypeOf(t.constructor)===z}function Nt(t,e){if(!e)return null;Array.isArray(e);let r,n,i;return e.forEach(o=>{o.constructor===Z?r=o:xt(o)?n=o:i=o}),i||n||r||null}function ke(t,e){let r=t.indexOf(e);r>-1&&t.splice(r,1)}function Te(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ot=class extends se{constructor(e=null,r,n){super(_t(r),Vt(n,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),X(r)&&(r.nonNullable||r.initialValueIsDefault)&&(Te(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,r={}){this.value=this._pendingValue=e,this._onChange.length&&r.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,r.emitViewToModelChange!==!1)),this.updateValueAndValidity(r)}patchValue(e,r={}){this.setValue(e,r)}reset(e=this.defaultValue,r={}){this._applyFormState(e),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ke(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ke(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Te(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Pt={provide:T,useExisting:w(()=>le)},je=Promise.resolve(),le=(()=>{let e=class e extends T{constructor(n,i,o,u,l,V){super(),this._changeDetectorRef=l,this.callSetDisabledState=V,this.control=new Ot,this._registered=!1,this.name="",this.update=new L,this._parent=n,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=Nt(this,u)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let i=n.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),It(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Mt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){je.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let i=n.isDisabled.currentValue,o=i!==0&&be(i);je.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?bt(n,this._parent):[n]}};e.\u0275fac=function(i){return new(i||e)(c(re,9),c(ct,10),c(ht,10),c(j,10),c(De,8),c(ae,8))},e.\u0275dir=f({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[B.None,"disabled","isDisabled"],model:[B.None,"ngModel","model"],options:[B.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[S([Pt]),E,fe]});let t=e;return t})();var kt={provide:j,useExisting:w(()=>de),multi:!0},de=(()=>{let e=class e extends z{writeValue(n){let i=n??"";this.setProperty("value",i)}registerOnChange(n){this.onChange=i=>{n(i==""?null:parseFloat(i))}}};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=x(e)))(o||e)}})(),e.\u0275dir=f({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,o){i&1&&D("input",function(l){return o.onChange(l.target.value)})("blur",function(){return o.onTouched()})},features:[S([kt]),E]});let t=e;return t})();var Tt=new A("");var jt={provide:j,useExisting:w(()=>K),multi:!0};function Xe(t,e){return t==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${t}: ${e}`.slice(0,50))}function Gt(t){return t.split(":")[0]}var K=(()=>{let e=class e extends z{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(n){this._compareWith=n}writeValue(n){this.value=n;let i=this._getOptionId(n),o=Xe(i,n);this.setProperty("value",o)}registerOnChange(n){this.onChange=i=>{this.value=this._getOptionValue(i),n(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(n){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i),n))return i;return null}_getOptionValue(n){let i=Gt(n);return this._optionMap.has(i)?this._optionMap.get(i):n}};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=x(e)))(o||e)}})(),e.\u0275dir=f({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(i,o){i&1&&D("change",function(l){return o.onChange(l.target.value)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[S([jt]),E]});let t=e;return t})(),Ye=(()=>{let e=class e{constructor(n,i,o){this._element=n,this._renderer=i,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(n){this._select!=null&&(this._select._optionMap.set(this.id,n),this._setElementValue(Xe(this.id,n)),this._select.writeValue(this._select.value))}set value(n){this._setElementValue(n),this._select&&this._select.writeValue(this._select.value)}_setElementValue(n){this._renderer.setProperty(this._element.nativeElement,"value",n)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(i){return new(i||e)(c(N),c(O),c(K,9))},e.\u0275dir=f({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let t=e;return t})(),Bt={provide:j,useExisting:w(()=>Ke),multi:!0};function Ge(t,e){return t==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${t}: ${e}`.slice(0,50))}function Lt(t){return t.split(":")[0]}var Ke=(()=>{let e=class e extends z{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(n){this._compareWith=n}writeValue(n){this.value=n;let i;if(Array.isArray(n)){let o=n.map(u=>this._getOptionId(u));i=(u,l)=>{u._setSelected(o.indexOf(l.toString())>-1)}}else i=(o,u)=>{o._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(n){this.onChange=i=>{let o=[],u=i.selectedOptions;if(u!==void 0){let l=u;for(let V=0;V<l.length;V++){let G=l[V],Q=this._getOptionValue(G.value);o.push(Q)}}else{let l=i.options;for(let V=0;V<l.length;V++){let G=l[V];if(G.selected){let Q=this._getOptionValue(G.value);o.push(Q)}}}this.value=o,n(o)}}_registerOption(n){let i=(this._idCounter++).toString();return this._optionMap.set(i,n),i}_getOptionId(n){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i)._value,n))return i;return null}_getOptionValue(n){let i=Lt(n);return this._optionMap.has(i)?this._optionMap.get(i)._value:n}};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=x(e)))(o||e)}})(),e.\u0275dir=f({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(i,o){i&1&&D("change",function(l){return o.onChange(l.target)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[S([Bt]),E]});let t=e;return t})(),Je=(()=>{let e=class e{constructor(n,i,o){this._element=n,this._renderer=i,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(n){this._select!=null&&(this._value=n,this._setElementValue(Ge(this.id,n)),this._select.writeValue(this._select.value))}set value(n){this._select?(this._value=n,this._setElementValue(Ge(this.id,n)),this._select.writeValue(this._select.value)):this._setElementValue(n)}_setElementValue(n){this._renderer.setProperty(this._element.nativeElement,"value",n)}_setSelected(n){this._renderer.setProperty(this._element.nativeElement,"selected",n)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(i){return new(i||e)(c(N),c(O),c(Ke,9))},e.\u0275dir=f({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let t=e;return t})();var Qe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=y({type:e}),e.\u0275inj=m({});let t=e;return t})();var et=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:ae,useValue:n.callSetDisabledState??Y}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=y({type:e}),e.\u0275inj=m({imports:[Qe]});let t=e;return t})(),tt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:Tt,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:ae,useValue:n.callSetDisabledState??Y}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=y({type:e}),e.\u0275inj=m({imports:[Qe]});let t=e;return t})();var nt=(()=>{let e=class e{constructor(n){this.shared=n,this.student={id:0,Fname:"",Lname:"",email:"",age:0,address:"",city:"",grade:0,gender:""},this.login=new U}ngOnInit(){}onsubmit(n){console.log(this.login)}addStudent(){this.shared.studentList.push(this.student),this.student={id:0,Fname:"",Lname:"",email:"",age:0,address:"",city:"",grade:0,gender:""},console.log(this.student)}};e.\u0275fac=function(i){return new(i||e)(c(H))},e.\u0275cmp=g({type:e,selectors:[["app-student"]],decls:60,vars:9,consts:[[1,"row","mt-5"],[1,"col-6"],["for","inputState",1,"form-label"],["type","number","title","text","placeholder","ID",1,"form-control","m-1",3,"ngModelChange","ngModel"],["type","text","title","text","placeholder","Fname",1,"form-control","m-1",3,"ngModelChange","ngModel"],["type","text","title","text","placeholder","Lname",1,"form-control","m-1",3,"ngModelChange","ngModel"],["type","email","title","power","placeholder","email",1,"form-control","m-1",3,"ngModelChange","ngModel"],["type","text","title","image","placeholder","address",1,"form-control","m-1",3,"ngModelChange","ngModel"],[1,"col-3"],["type","text","title","image","placeholder","city",1,"form-control","m-1",3,"ngModelChange","ngModel"],[1,"col-md-3"],["id","inputState",1,"form-select",3,"ngModelChange","ngModel"],["selected",""],["id","gender","title","gender",1,"form-select",3,"ngModelChange","ngModel"],["type","number","title","image","placeholder","age",1,"form-control","m-1",3,"ngModelChange","ngModel"],["type","button",1,"form-control","mb-5","bg-info","text-light","mt-5",3,"click"]],template:function(i,o){i&1&&(s(0,"div",0)(1,"div",1)(2,"label",2),d(3,"ID"),a(),s(4,"input",3),C("ngModelChange",function(l){return _(o.student.id,l)||(o.student.id=l),l}),a()(),s(5,"div",1)(6,"label",2),d(7,"Firstname"),a(),s(8,"input",4),C("ngModelChange",function(l){return _(o.student.Fname,l)||(o.student.Fname=l),l}),a()(),s(9,"div",1)(10,"label",2),d(11,"Lastname"),a(),s(12,"input",5),C("ngModelChange",function(l){return _(o.student.Lname,l)||(o.student.Lname=l),l}),a()(),s(13,"div",1)(14,"label",2),d(15,"Email"),a(),s(16,"input",6),C("ngModelChange",function(l){return _(o.student.email,l)||(o.student.email=l),l}),a()(),s(17,"div",1)(18,"label",2),d(19,"Address"),a(),s(20,"input",7),C("ngModelChange",function(l){return _(o.student.address,l)||(o.student.address=l),l}),a()(),s(21,"div",8)(22,"label",2),d(23,"City"),a(),s(24,"input",9),C("ngModelChange",function(l){return _(o.student.city,l)||(o.student.city=l),l}),a()(),s(25,"div",10)(26,"label",2),d(27,"Grade"),a(),s(28,"select",11),C("ngModelChange",function(l){return _(o.student.grade,l)||(o.student.grade=l),l}),s(29,"option",12),d(30,"Choose Grade"),a(),s(31,"option"),d(32,"1"),a(),s(33,"option"),d(34,"2"),a(),s(35,"option"),d(36,"3"),a(),s(37,"option"),d(38,"4"),a(),s(39,"option"),d(40,"5"),a(),s(41,"option"),d(42,"6"),a()()(),s(43,"div",10)(44,"label",2),d(45,"gender"),a(),s(46,"select",13),C("ngModelChange",function(l){return _(o.student.gender,l)||(o.student.gender=l),l}),s(47,"option",12),d(48,"Gender"),a(),s(49,"option"),d(50,"Male"),a(),s(51,"option"),d(52,"Female"),a()()(),s(53,"div",8)(54,"label",2),d(55,"Age"),a(),s(56,"input",14),C("ngModelChange",function(l){return _(o.student.age,l)||(o.student.age=l),l}),a()(),s(57,"div",8)(58,"button",15),D("click",function(){return o.addStudent()}),d(59,"Create"),a()()()),i&2&&(h(4),v("ngModel",o.student.id),h(4),v("ngModel",o.student.Fname),h(4),v("ngModel",o.student.Lname),h(4),v("ngModel",o.student.email),h(4),v("ngModel",o.student.address),h(4),v("ngModel",o.student.city),h(4),v("ngModel",o.student.grade),h(18),v("ngModel",o.student.gender),h(10),v("ngModel",o.student.age))},dependencies:[Ye,Je,Z,de,K,ze,le]});let t=e;return t})();function Ut(t,e){if(t&1){let r=_e();s(0,"tr")(1,"td"),d(2),a(),s(3,"td"),d(4),a(),s(5,"td"),d(6),a(),s(7,"td"),d(8),a(),s(9,"td"),d(10),a(),s(11,"td"),d(12),a(),s(13,"td"),d(14),a(),s(15,"td"),d(16),a(),s(17,"td"),d(18),a(),s(19,"td"),d(20),a(),s(21,"button",3),D("click",function(){let i=pe(r).$implicit,o=Ce();return me(o.delete(i.id))}),d(22,"delete"),a()()}if(t&2){let r=e.$implicit,n=e.index;h(2),p(n+1),h(2),p(r.id),h(2),p(r.Fname),h(2),p(r.Lname),h(2),p(r.email),h(2),p(r.age),h(2),p(r.address),h(2),p(r.city),h(2),p(r.grade),h(2),p(r.gender)}}var it=(()=>{let e=class e{constructor(n){this.shared=n}delete(n){this.shared.deleteStudent(n)}};e.\u0275fac=function(i){return new(i||e)(c(H))},e.\u0275cmp=g({type:e,selectors:[["app-student-list"]],decls:25,vars:1,consts:[[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(i,o){i&1&&(s(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),d(4,"#"),a(),s(5,"th",1),d(6,"ID"),a(),s(7,"th",1),d(8,"First name"),a(),s(9,"th",1),d(10,"Last name"),a(),s(11,"th",1),d(12,"Email"),a(),s(13,"th",1),d(14,"age"),a(),s(15,"th",1),d(16,"address"),a(),s(17,"th",1),d(18,"City"),a(),s(19,"th",1),d(20,"grade"),a(),s(21,"th",1),d(22,"Gender"),a()()(),s(23,"tbody"),ge(24,Ut,23,10,"tr",2),a()()),i&2&&(h(24),ye("ngForOf",o.shared.studentList))},dependencies:[Me]});let t=e;return t})();var rt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=g({type:e,selectors:[["app-notfound"]],decls:2,vars:0,consts:[[1,"text-danger","text-center","mt-5"]],template:function(i,o){i&1&&(s(0,"h1",0),d(1,"Error 404 Page not found"),a())}});let t=e;return t})();var Ht=[{path:"",redirectTo:"/student",pathMatch:"full"},{path:"student",component:nt},{path:"student-list",component:it},{path:"**",component:rt}],ot=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=y({type:e}),e.\u0275inj=m({imports:[ne.forRoot(Ht),ne]});let t=e;return t})();var st=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=g({type:e,selectors:[["app-header"]],decls:17,vars:0,consts:[["data-bs-theme","dark",1,"navbar","bg-dark","border-bottom","border-body"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["aria-current","page","href","#",1,"nav-link","active"],["routerLink","/student",1,"nav-link"],["routerLink","/student-list",1,"nav-link"]],template:function(i,o){i&1&&(s(0,"nav",0)(1,"div",1)(2,"a",2),d(3,"Student System"),a(),s(4,"button",3),R(5,"span",4),a(),s(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),d(10,"Home"),a()(),s(11,"li",7)(12,"a",9),d(13,"Add-Student"),a()(),s(14,"li",7)(15,"a",10),d(16,"Student-List"),a()()()()()())},dependencies:[Se]});let t=e;return t})();var J=(()=>{let e=class e{constructor(){this.title="studentsystem"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=g({type:e,selectors:[["app-root"]],decls:2,vars:0,template:function(i,o){i&1&&R(0,"app-header")(1,"router-outlet")},dependencies:[we,st],styles:["body[_ngcontent-%COMP%]{background-color:#fff;margin:0}"]});let t=e;return t})();var at=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=y({type:e,bootstrap:[J]}),e.\u0275inj=m({providers:[Ae()],imports:[Ee,ot,et,tt]});let t=e;return t})();var qt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=y({type:e,bootstrap:[J]}),e.\u0275inj=m({imports:[at,Fe]});let t=e;return t})();export{qt as a};