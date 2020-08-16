module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "sort-imports": [
      "error",
      {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
      }
    ],
    "object-curly-newline": [
      "error",
      {
        "ObjectPattern": { "multiline": true, "minProperties": 4 },
        "ImportDeclaration": { "multiline": true, "minProperties": 4 },
        "ExportDeclaration": { "multiline": true, "minProperties": 4 }
      }
    ],
    "object-property-newline": [
      "error",
      { "allowAllPropertiesOnSameLine": true }
    ],
  }
};
