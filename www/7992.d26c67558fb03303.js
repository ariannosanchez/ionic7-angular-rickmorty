"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7992],{7992:(Z,m,t)=>{t.r(m),t.d(m,{HomePageModule:()=>M});var l=t(6814),s=t(95),r=t(5548),c=t(4670),e=t(6689),u=t(6290);function h(n,i){if(1&n&&(e.TgZ(0,"ion-col",8)(1,"ion-card")(2,"ion-grid")(3,"ion-row")(4,"ion-col",9)(5,"ion-avatar"),e._UZ(6,"img",10),e.qZA()(),e.TgZ(7,"ion-col",11)(8,"div",12),e._uU(9),e.qZA(),e.TgZ(10,"p"),e._uU(11,"Visto por primera vez:"),e._UZ(12,"br"),e.TgZ(13,"strong"),e._uU(14),e.qZA()(),e.TgZ(15,"p"),e._uU(16,"Visto por ultima vez:"),e._UZ(17,"br"),e.TgZ(18,"strong"),e._uU(19),e.qZA()()()()()()()),2&n){const o=i.$implicit;e.MGl("routerLink","/character-detail/",o.id,""),e.xp6(6),e.Q6J("src",o.image,e.LSH),e.xp6(3),e.Oqu(o.name),e.xp6(5),e.Oqu(o.origin.name),e.xp6(5),e.Oqu(o.location.name)}}const p=[{path:"",component:(()=>{class n{constructor(o){this.rickandMortySvc=o,this.characters=[],this.params={}}ngOnInit(){this.params.page=0,this.getCharacters(),this.searchCharacters()}getCharacters(o){this.params.page+=1,this.rickandMortySvc.getCharacters(this.params).subscribe({next:a=>{this.characters.push(...a.results),console.log(this.characters),o&&o.target.complete()},error:a=>{o&&o.target.complete()}})}searchCharacters(){this.params.page=1,this.rickandMortySvc.getCharacters(this.params).subscribe({next:o=>{this.characters=o.results},error:o=>{}})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(u.U))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:17,vars:3,consts:[["mode","md"],[1,"version"],["mode","ios"],[1,"glass-content"],["size","12",1,"d-flex-center"],["placeholder","Buscar...",3,"ngModel","debounce","ngModelChange","ionInput"],["size-lg","6","size-md","6","size-sm","12","size","12",3,"routerLink",4,"ngFor","ngForOf"],["threshold","25%","position","bottom",3,"ionInfinite"],["size-lg","6","size-md","6","size-sm","12","size","12",3,"routerLink"],["size-lg","4","size-md","4","size-sm","4","size","12",1,"ion-padding"],[3,"src"],["size-lg","8","size-md","8","size-sm","8","size","12",1,"ion-padding"],[1,"name"]],template:function(o,a){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title")(3,"div",1),e._uU(4,"Ionic 7"),e.qZA(),e.TgZ(5,"strong"),e._uU(6,"Rick & Morty"),e.qZA()()()(),e.TgZ(7,"ion-content",2)(8,"div",3)(9,"ion-grid")(10,"ion-row")(11,"ion-col",4)(12,"ion-searchbar",5),e.NdJ("ngModelChange",function(g){return a.params.name=g})("ionInput",function(){return a.searchCharacters()}),e.qZA()()(),e.TgZ(13,"ion-row"),e.YNc(14,h,20,5,"ion-col",6),e.qZA()(),e.TgZ(15,"ion-infinite-scroll",7),e.NdJ("ionInfinite",function(g){return a.getCharacters(g)}),e._UZ(16,"ion-infinite-scroll-content"),e.qZA()()()),2&o&&(e.xp6(12),e.Q6J("ngModel",a.params.name)("debounce",250),e.xp6(2),e.Q6J("ngForOf",a.characters))},dependencies:[l.sg,s.JJ,s.On,r.BJ,r.PM,r.wI,r.W2,r.jY,r.Gu,r.ju,r.MB,r.Nd,r.VI,r.wd,r.sr,r.j9,r.YI,c.rH],styles:[".version[_ngcontent-%COMP%]{font-size:14px}ion-avatar[_ngcontent-%COMP%]{--border-radius: 10px;width:100%;height:100%}.name[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700}ion-searchbar[_ngcontent-%COMP%]{--background: rgba(7, 7, 7, .2);max-width:350px;color:#fff}ion-card[_ngcontent-%COMP%]:hover{cursor:pointer;background:rgba(7,7,7,.485)}"]}),n})()}];let f=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(p),c.Bz]}),n})();var z=t(6208);let M=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,s.u5,r.Pc,z.m,f]}),n})()}}]);