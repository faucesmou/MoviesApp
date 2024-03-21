module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [ 
  ['module:react-native-dotenv', {
    envName: 'APP_ENV',
    moduleName: '@env',
    path: '.env'
  }],

  // si usa reanimated asegurese de que este ultimo aqui: 
  ]

};
