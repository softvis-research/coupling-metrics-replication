define("jira/ajs/default-custom-event",["jquery","exports"],function(e,n){var t={};n.bind=function(n,a){if(t[n])throw new Error("You have already bound a default handler for ["+n+"] event");t[n]=function(t){var u=e(document).data("events")[n],l=u[u.length-1].handler;l!==arguments.callee?(t.preventDefault=function(){a=null},u[u.length-1].handler=function(){l.apply(this,arguments),a&&a.apply(this,arguments),u[u.length-1].handler=l}):a.apply(this,arguments)},e(document).bind(n,t[n])},n.unbind=function(n){t[n]&&(e(document).unbind(n,t[n]),delete t[n])}}),AJS.namespace("AJS.bindDefaultCustomEvent",null,require("jira/ajs/default-custom-event").bind),AJS.namespace("AJS.unbindDefaultCustomEvent",null,require("jira/ajs/default-custom-event").unbind);