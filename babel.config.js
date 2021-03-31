module.exports = {
  sourceType: 'unambiguous',
  ignore: [/[\/\\]core-js/, /@babel[\/\\]runtime/],
  presets: [['@babel/preset-env', { useBuiltIns: 'usage' }], '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties',
     [
          "css-modules-transform",
          {
              camelCase: true,
              extensions: [ ".css", ".scss" ],
          }
      ],
      "dynamic-import-node"
    ]
};
