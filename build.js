const StyleDictionaryPackage = require('style-dictionary');
const {createFlatObject} = require('./functions');

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATE

StyleDictionaryPackage.registerTransform({
  name: 'sizes/px',
  type: 'value',
  matcher: function (prop) {
    // You can be more specific here if you only want 'em' units for font sizes
    return ['fontSizes', 'spacing', 'borderRadius', 'borderWidth', 'sizing'].includes(prop.attributes.category);
  },
  transformer: function (prop) {
    // You can also modify the value here if you want to convert pixels to ems
    return parseFloat(prop.original.value) + 'px';
  },
});

function getStyleDictionaryConfig(theme) {
  return {
    "source": [
      `tokens/${theme}.json`,
    ],
    "format": {
      createFlatObject
    },
    "platforms": {
      json: {
        "transforms": ["attribute/cti", "name/cti/camel", "sizes/px"],
        "buildPath": `output/`,
        "files": [{
          "destination": `${theme}.json`,
          "format": "createFlatObject"
        }]
      }
    }
  };
}


StyleDictionaryPackage.registerTransformGroup({
  name: 'tokens-json',
  transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"]
});

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

['main', 'main-dark', 'other', 'other-dark'].map(function (theme) {
  console.log('\n==============================================');
  console.log(`\nProcessing: [${theme}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));

  StyleDictionary.buildPlatform('json');

  console.log('\nEnd processing');
});

console.log('\n==============================================');
console.log('\nBuild completed!');
