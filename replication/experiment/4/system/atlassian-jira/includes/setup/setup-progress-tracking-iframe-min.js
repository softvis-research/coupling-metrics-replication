define("jira/setup/setup-tracker",["jira/util/data/meta","jira/jquery/deferred","jquery","underscore"],function(e,t,n,r){function u(e){var t=[];for(var n in e)t.push(n+"="+encodeURIComponent(e[n]));return t.length?"?"+t.join("&"):""}function i(e){var u=t();if(r.isEmpty(g))u.reject();else{var i=n("<iframe>").css("display","none").attr("src",g+e);i.load(function(){u.resolve()}),i.appendTo("body"),setTimeout(function(){u.reject()},3e3)}return u.promise()}function s(){var t=e.get("setup-session-id"),n="jira.setup.session.id";return t?localStorage.setItem(n,t):t=localStorage.getItem(n),t}function a(){return{releasedInstantSetup:"true",instantSetup:e.get("instant-setup"),pg:window.location.pathname.replace(/\//g,"_"),product:"jira",SEN:e.get("SEN"),setupSessionId:s(),sid:e.get("server-id"),v:e.get("version-number")}}function o(){return i(u(a()))}function d(e){var e=e||{};return i(u(n.extend(a(),e)))}function c(e){var e=e||{};return i(u(n.extend(a(),e,{instantSetupCompleted:"true"})))}function p(){return i(u(n.extend(a(),{instantSetupAIDUserCreated:"true"})))}function f(){return i(u(n.extend(a(),{instantSetupAIDUserLogged:"true"})))}function l(){return i(u(n.extend(a(),{instantSetupMacJourneyComplete:"true"})))}function v(){return i(u(n.extend(a(),{instantSetupMacJourneyFailure:"true"})))}var g=e.get("setup-analytics-iframe-url");return{insert:o,sendInstantSetupCompletedEvent:c,sendMailConfigurationEvent:d,sendUserCreatedEvent:p,sendUserLoggedInEvent:f,sendUserArrivedFromMacSuccess:l,sendUserArrivedFromMacFailed:v}});