define('marionette-3.1', [
    'atlassian/libs/factories/marionette-3.1.0',
    'atlassian/libs/factories/backbone.radio-2.0.0',
    'underscore',
    'backbone'
], function (
    MarionetteFactory,
    BackboneRadioFactory,
    _,
    Backbone
) {
    const BackboneRadio = BackboneRadioFactory(_, Backbone);

    return MarionetteFactory(_, Backbone, BackboneRadio);
});