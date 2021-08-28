define("jira/autocomplete/autocomplete",["jira/ajs/ajax/smart-ajax","jira/util/key-code","jira/util/objects","jquery"],function(e,t,o,n){return function(){var i,s=function e(t,o){e.t&&(clearTimeout(e.t),e.t=void 0),e.t=setTimeout(t,1e3*o)},r={9:!0,13:!0,14:!0,25:!0,27:!0,38:!0,40:!0,224:!0};return{dispatcher:function(){},getSavedResponse:function(){},saveResponse:function(){},renderSuggestions:function(){},disable:function(){this.disabled=!0},enable:function(){this.disabled=!1},set:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t])},completeField:function(e){e&&(this.field.val(e).focus(),this.field.trigger("change"))},textToSuggestionCursorPosition:function(){return this.field.val()},_makeRequest:function(t){var n=this,i=o.copyObject(t);return this.pendingRequest&&this.pendingRequest.abort(),i.complete=function(){n.pendingRequest=null},i.error=function(e){!e.aborted&&0!==e.status&&t.error&&t.error.apply(this,arguments)},this.pendingRequest=e.makeRequest(i)},addSuggestionControls:function(e){function o(e){d.dropdownController.displayed&&a(e.data.index)}function s(e){0===e.data.index&&(d.selectedIndex=-1),n(this).removeClass("active")}function r(e){d.completeField(d.suggestionNodes[e.data.index][1])}var d=this,l=function(e,t){var o=!1===d.autoSelectFirst?-1:0;return d.allowArrowCarousel?e>t?o:e<o?t:e:e>t?t:e<o?(d.responseContainer.scrollTop(0),o):e},a=function(e){void 0!==d.selectedIndex&&d.selectedIndex>-1&&d.suggestionNodes[d.selectedIndex][0].removeClass("active"),d.selectedIndex=l(e,d.suggestionNodes.length-1),d.selectedIndex>-1&&d.suggestionNodes[d.selectedIndex][0].addClass("active")},u=function(){return d.suggestionNodes&&d.suggestionNodes[d.selectedIndex]&&d.suggestionNodes[d.selectedIndex][0].hasClass("active")},p=function(e){d.responseContainer.is(":visible")&&e.keyCode===t.ENTER&&(u()&&!d.pendingRequest&&d.completeField(d.suggestionNodes[d.selectedIndex][1]),e.preventDefault(),e.stopPropagation())},c=function(e){if(d.responseContainer.is(":visible"))if(d.field[0]!==document.activeElement&&d.field.focus(),e.keyCode===t.DOWN){if(a(d.selectedIndex+1),d.selectedIndex>=0){var o=d.responseContainer.height(),n=d.suggestionNodes[d.selectedIndex][0].position().top+d.suggestionNodes[d.selectedIndex][0].outerHeight();n-o>0&&d.responseContainer.scrollTop(d.responseContainer.scrollTop()+n-o+2)}else d.responseContainer.scrollTop(0);e.preventDefault()}else if(e.keyCode===t.UP){if(a(d.selectedIndex-1),d.selectedIndex>=0){var i=d.suggestionNodes[d.selectedIndex][0].position().top;i<0&&d.responseContainer.scrollTop(d.responseContainer.scrollTop()+i-2)}e.preventDefault()}else e.keyCode===t.TAB&&(u()?(d.completeField(d.suggestionNodes[d.selectedIndex][1]),e.preventDefault()):d.dropdownController.hideDropdown())};if(e.length){this.selectedIndex=0,this.suggestionNodes=e;for(var h=0;h<d.suggestionNodes.length;h++){var f={instance:this,index:h};this.suggestionNodes[h][0].bind("mouseover",f,o).bind("mouseout",f,s).bind("click",f,r).bind("mousedown",function(e){e.preventDefault()})}this.keyboardHandlerBinded||(n(this.field).keypress(p),n(this.field).keydown(c),this.keyboardHandlerBinded=!0),a(!1===d.autoSelectFirst?-1:0),i=this}},clearResponseContainer:function(){this.responseContainer.empty(),this.suggestionNodes=void 0},delay:s,buildResponseContainer:function(){var e=this.field.parent().addClass("atlassian-autocomplete");this.responseContainer=n(document.createElement("div")),this.responseContainer.addClass("suggestions"),this.positionResponseContainer(),this.responseContainer.appendTo(e)},positionResponseContainer:function(){this.responseContainer.css({top:this.field.outerHeight()})},keyUpHandler:function(){function e(){this.responseContainer||this.buildResponseContainer(),this.dispatcher(this.field.val())}return function(o){return this.field.val().length>=this.minQueryLength&&(o.keyCode in r&&(!this.responseContainer||this.responseContainer.is(":visible")||o.keyCode!==t.UP&&o.keyCode!==t.DOWN)||e.call(this)),o}}(),addMultiSelectAdvice:function(e){var t=this,o=function e(o){if(!e.isAlerting){e.isAlerting=!0;var i=n(document.createElement("div")).css({float:"left",display:"none"}).addClass("warningBox").html("Oops! You have already entered the value <em>"+o+"</em>").appendTo(t.field.parent()).show("fast",function(){t.delay(function(){i.hide("fast",function(){i.remove(),e.isAlerting=!1})},4)})}};n.aop.before({target:this,method:"dispatcher"},function(t){var o=this.field.val();return t[0]=n.trim(o.slice(o.lastIndexOf(e)+1)),t}),n.aop.before({target:this,method:"completeField"},function(t){var i=t[0],s=this.field.val().split(e),r=n(s).map(function(){return n.trim(this)}).get();return!this.allowDuplicates&&new RegExp("(?:^|[\\s"+e+"])"+i+"\\s*"+e).test(this.field.val())?(o(i),r[r.length-1]=""):(r[r.length-1]=i,r[r.length]=""),t[0]=r.join(e.replace(/([^\s]$)/,"$1 ")),t})},addDropdownAdvice:function(){n.aop.after({target:this,method:"buildResponseContainer"},function(e){return this.dropdownController=JIRA.Dropdown.AutoComplete({target:this,method:"renderSuggestions"},this.responseContainer),n.aop.after({target:this.dropdownController,method:"hideDropdown"},function(){this.dropdown.removeClass("dropdown-ready"),clearTimeout(s.t)}),e}),n.aop.after({target:this,method:"renderSuggestions"},function(e){return e&&e.length>0?(this.dropdownController.displayDropdown(),this.maxHeight&&this.dropdownController.dropdown.prop("scrollHeight")>this.maxHeight?this.dropdownController.dropdown.css({height:this.maxHeight,overflowX:"visible",overflowY:"scroll"}):this.maxHeight&&this.dropdownController.dropdown.css({height:"",overflowX:"",overflowY:""}),this.dropdownController.dropdown.addClass("dropdown-ready")):this.dropdownController.hideDropdown(),e}),n.aop.after({target:this,method:"completeField"},this._afterCompleteField),n.aop.after({target:this,method:"keyUpHandler"},function(e){return this.field.val().length>=this.minQueryLength&&e.keyCode!==t.ESCAPE||!this.dropdownController||!this.dropdownController.displayed||(this.dropdownController.hideDropdown(),e.keyCode===t.ESCAPE&&e.stopPropagation()),e})},_afterCompleteField:function(e){return this.dropdownController.hideDropdown(),e},init:function(e){var o=this;this.set(e),this.field=this.field||n("#"+this.fieldID),this.field.attr("autocomplete","off").keyup(function(e){o.disabled||o.keyUpHandler(e)}).keydown(function(e){e.keyCode===t.ESCAPE&&o.responseContainer&&o.responseContainer.is(":visible")&&e.preventDefault()}).click(function(e){i===o&&(setTimeout(function(){o.dispatcher(o.field.val())},0),e.stopPropagation())}).blur(function(){o.pendingRequest&&o.pendingRequest.abort()}).focus(function(e){o.disabled||(e.originalEvent&&e.originalEvent.relatedTarget&&setTimeout(function(){o.dispatcher(o.field.val())},0),i=o)}),this.addDropdownAdvice(),e.delimChar&&this.addMultiSelectAdvice(e.delimChar)}}}()}),AJS.namespace("jira.widget.autocomplete",null,require("jira/autocomplete/autocomplete")),AJS.namespace("JIRA.AutoComplete",null,require("jira/autocomplete/autocomplete"));