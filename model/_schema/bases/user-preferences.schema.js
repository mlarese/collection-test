userPreferencesSchema = new SimpleSchema({
    'ristoranti_pub': {type: Boolean, optional: true, defaultValue: false,index:1},
    'tickets_divertimento': {type: Boolean, optional: true, defaultValue: false,index:1},
    'bellezza_spa': {type: Boolean, optional: true, defaultValue: false,index:1},
    'salute_sport': {type: Boolean, optional: true, defaultValue: false,index:1},
    'corsi_servizi': {type: Boolean, optional: true, defaultValue: false,index:1},
    'elettronica': {type: Boolean, optional: true, defaultValue: false,index:1},
    'donna': {type: Boolean, optional: true, defaultValue: false,index:1},
    'uomo': {type: Boolean, optional: true, defaultValue: false,index:1},
    'casa_giardinaggio': {type: Boolean, optional: true, defaultValue: false,index:1},
    'viaggi': {type: Boolean, optional: true, defaultValue: false,index:1},
    'introvabili': {type: Boolean, optional: true, defaultValue: false,index:1}
});