define("jira/components/color-picker/view/color-picker-input-view",["marionette-3.1","jira/util/key-code","underscore"],function(e,o,r){"use strict";return e.View.extend({template:JIRA.Templates.Components.ColorPicker.colorPickerInput,className:"color-picker-wrapper",ui:{input:"input",colorPreview:".color-preview"},events:{"keyup @ui.input":"onInputKeyup","keydown @ui.input":"onInputKeydown","focus @ui.input":"openPicker","click @ui.input":"openPicker","click @ui.colorPreview":"onColorPreviewClick"},modelEvents:{"change:color":"onColorChange","change:colorDefined":"onColorDefinedChange"},onInputKeyup:function(){this._triggerColorChange(this.getUI("input").val())},onInputKeydown:function(e){r.contains([o.TAB,o.ENTER,o.ESCAPE],e.keyCode)&&this.getColorPickerHandler().ColorPickerHide()},onColorPreviewClick:function(e){e.preventDefault(),this.getUI("input").focus()},openPicker:function(){this.getColorPickerHandler().ColorPickerShow()},onInputBlur:function(){this.getColorPickerHandler().ColorPickerHide()},onColorChange:function(e,o){this.getUI("input").val(o),this.getUI("colorPreview").css("backgroundColor",o),o&&this.getColorPickerHandler().ColorPickerSetColor(o)},onColorDefinedChange:function(e,o){o?this.getUI("colorPreview").show():this.getUI("colorPreview").hide()},getColorPickerHandler:function(){return this.getUI("input")},_triggerColorChange:function(e){this.triggerMethod("color:selected",e)},_setUpColorPicker:function(){var e=this;this.getColorPickerHandler().ColorPicker({onSubmit:function(o,r){e._triggerColorChange("#"+r),e.getColorPickerHandler().ColorPickerHide()},onChange:function(o,r){e._triggerColorChange("#"+r)},onBeforeShow:function(){e.model.get("colorDefined")&&e.getColorPickerHandler().ColorPickerSetColor(e.model.get("color"))}})},onRender:function(){this.model.get("colorDefined")||this.getUI("colorPreview").hide(),this._setUpColorPicker()}})});