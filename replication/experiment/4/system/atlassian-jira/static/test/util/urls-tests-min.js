AJS.test.require(["jira.webresources:jira-urlhelpers"],function(){"use strict";var e,t=require("jquery");module("jira/util/urls#atl_token",{setup:function(){t("#atlassian-token").size()||t('<meta content="" id="atlassian-token" />').appendTo("#qunit-fixture"),e=require("jira/util/urls")}}),test("returns undefined if no token is set for the request",function(){t("#atlassian-token").remove(),equal(e.atl_token(),void 0,"should return undefined when there is no XSRF token")}),test("returns the security token for the request",function(){t("#atlassian-token").attr("content","1234|lin"),equal(e.atl_token(),"1234|lin","should return the value of the current XSRF token")})});