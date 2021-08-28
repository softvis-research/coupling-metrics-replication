AJS.test.require("jira.webresources:browseprojects",function(){"use strict";var e,t=require("marionette");module("Analytics",{setup:function(){this.application=new t.Application,this.application.start(),e=sinon.stub();var o=AJS.test.mockableModuleContext();o.mock("marionette",t),o.mock("jira/analytics",{send:e}),new(o.require("jira/project/browse/analytics"))({target:this.application}).startListening(),this.mockProject={attributes:{id:"PROJT",projectTypeKey:"Test"}}}}),test("project type changed to business",function(){this.application.trigger("browse-projects.project-type-change","business"),sinon.assert.calledWith(e,{name:"projects.browse.types.business"})}),test("project type changed to software",function(){this.application.trigger("browse-projects.project-type-change","software"),sinon.assert.calledWith(e,{name:"projects.browse.types.software"})}),test("project type changed to service desk",function(){this.application.trigger("browse-projects.project-type-change","service_desk"),sinon.assert.calledWith(e,{name:"projects.browse.types.servicedesk"})}),test("project type changed to all",function(){this.application.trigger("browse-projects.project-type-change","all"),sinon.assert.calledWith(e,{name:"projects.browse.types.all"})}),test("category changed to all",function(){this.application.trigger("browse-projects.category-change","all"),sinon.assert.calledWith(e,{name:"projects.browse.categories.all"})}),test("category changed to recent",function(){this.application.trigger("browse-projects.category-change","recent"),sinon.assert.calledWith(e,{name:"projects.browse.categories.recent"})}),test("category changed to user-defined category",function(){this.application.trigger("browse-projects.category-change","test"),sinon.assert.calledWith(e,{name:"projects.browse.categories.select"})}),test("project opened",function(){this.application.trigger("browse-projects.project-view.click-project-name",this.mockProject,1),sinon.assert.calledWith(e,{name:"projects.browse.openProject",data:{projectId:this.mockProject.attributes.id,projectType:this.mockProject.attributes.projectTypeKey,position:1}})}),test("user profile URL clicked",function(){this.application.trigger("browse-projects.project-view.click-lead-user",this.mockProject,1),sinon.assert.calledWith(e,{name:"projects.browse.openProfile",data:{projectId:this.mockProject.attributes.id,projectType:this.mockProject.attributes.projectTypeKey,position:1}})}),test("project URL clicked",function(){this.application.trigger("browse-projects.project-view.click-url",this.mockProject,1),sinon.assert.calledWith(e,{name:"projects.browse.openURL",data:{projectId:this.mockProject.attributes.id,projectType:this.mockProject.attributes.projectTypeKey,position:1}})}),test("project category clicked",function(){this.application.trigger("browse-projects.project-view.click-category",this.mockProject,1),sinon.assert.calledWith(e,{name:"projects.browse.openCategory",data:{projectId:this.mockProject.attributes.id,projectType:this.mockProject.attributes.projectTypeKey,position:1}})}),test("navigate to page",function(){this.application.trigger("browse-projects.navigate-to-page",1),sinon.assert.calledWith(e,{name:"projects.browse.pagination.goto",data:{pageNumber:1}})}),test("navigate to previous page",function(){this.application.trigger("browse-projects.navigate-to-previous"),sinon.assert.calledWith(e,{name:"projects.browse.pagination.previous"})}),test("navigate to next page",function(){this.application.trigger("browse-projects.navigate-to-next"),sinon.assert.calledWith(e,{name:"projects.browse.pagination.next"})})});