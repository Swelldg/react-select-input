# react-selector-input
[![npm](https://img.shields.io/badge/npm-v0.1.0-orange)](https://www.npmjs.com/package/react-selector-input)
[![license](https://img.shields.io/badge/license-MIT-blue)](https://github.com/Swelldg/react-selector-input/blob/master/license)
> a React input component with selector and filter

## Advantages
- Offer preset labels for users to input content  
  Add a selector to a regular input box.Users can not only input content manually, but also select preset labels.
- Search options according to highlighted input keywords   
  When users input content,**react-selector-input** can filter the labels in the selector based on keywords.Those keywords will also be highlighted with different color in the selector.
- Provide customized css style  
  Users can determine the size of components according to their own needs.
 
 ## Example
![demo](/demo.gif)

## Basic Usage
### Installation
```
npm i react-selector-input
```
### Import
```jsx
import SelectInput from "react-selector-input";
```
### Usage
```jsx
function Example(){
    const options = [
        {
            label:'test1'
        },
        {
            label:'test2'
        },
        {
            label:'test3'
        },
        {
            label:'test4'
        },
    ]
    const  onChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <div style={{display:'flex',justifyContent:'center',paddingTop:'200px'}}>
          <SelectInput placeholder={'placeholder'} width={'150px'} options={options} onChange={onChange} showClear />
        </div>

    );
}
```
## API
| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| placeholder | string | - | Placeholder in input box |
| onChange | function | - | Callback function when input content is changed |
| width | string | '150px' | Width of the input box |
| showClear | boolean | false | Whether show delete button which can remove the input content  |
| disabled | boolean | false | Whether the input is disabled  |
| defaultValue | string | - | Default value of the input box  |
| options | {label}[] | - | Content of select list |
| listHeight | string | auto | Height of select list |
| inputPadding | string | '6px 20px 6px 10px' | Padding of input box |
| listPadding | string | '6px' | Padding of select list |
| inputFontSize | string | '14px' | Fontsize of input box |
| listFontSize | string | '14px' | Fontsize of select list |
