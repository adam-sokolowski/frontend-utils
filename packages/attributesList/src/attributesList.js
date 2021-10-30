const utils = require('loader-utils');
const last = require('lodash/last');

const list = [];

const getAttribute = (componentTemplate, attr) => {
    const templateText = componentTemplate.replace(/ /g, '');

    if (templateText.split(attr)[1]) {
        const attributeValue = templateText.split(attr)[1].split('"')[0];
        const substringIndex = templateText.indexOf(attributeValue);

        const attributeValueLength = attributeValue.length + 2;
        const newStartIndex = substringIndex + attributeValueLength;

        const newString = templateText.substring(newStartIndex);
        
        const attribute = `${attr}${attributeValue}"`
        list.push(attribute);

        getAttribute(newString, attr);
    }
}

module.exports = function getAttributesList(content) {
    const options = utils.getOptions(this);
    const customAttributeString = options && options.attribute || 'data-test-id';

    const namePattern = options && options.name || '[path][name].[ext]';
    const fileUrl = utils.interpolateName(this, namePattern, { content });
    const fileName = last(fileUrl.split('/'));

    const customAttribute = `${customAttributeString}="`;
    getAttribute(content, customAttribute);

    if(!list.length) {
        console.error(`No ${customAttributeString} found in the file ${fileName}`);
        return '';
    } else {
        console.group();
        console.info('-----------------');
        console.info(`${customAttributeString} found in ${fileName}`);
        console.table(list);
        console.groupEnd();
    }

    list.length = 0;
    return '';
};