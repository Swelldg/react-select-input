import React, {useMemo, useRef, useState} from "react";
import './select-input.css';
import {DownOutlined, SearchOutlined, DeleteOutlined} from "@ant-design/icons";
import searchAllSub from "../StringsFunc/search-all-substrings";
import stringsRender from "../StringsFunc/strings-render";

function SelectInput(props) {
    const [isExpand, setIsExpand] = useState(false);
    const [inputValue, setInputValue] = useState(props.defaultValue);
    const [showClear, setShowClear] = useState(false);
    const inputRef = useRef();
    const listRef = useRef();
    const select_list = useMemo(() => {
        return props.options.filter((item) => {
            return !!(!inputValue || item.label.includes(inputValue))
        }).map((item) => {
            let itemContent;
            if (inputValue) {
                itemContent = stringsRender(item.label, searchAllSub(item.label, inputValue), inputValue.length);
            } else {
                itemContent = item.label;
            }
            return (
                <div className="select-list-item"
                     style={{fontSize:props.listFontSize,padding:props.listPadding}}
                     onClick={() => {
                    setInputValue(item.label);
                }}>{itemContent}</div>
            )
        })
    }, [props.options, inputValue]);
    const closeList = () => {
        setIsExpand(false);
        setTimeout(() => {
            listRef.current.style.display = 'none';
        }, 200);
    }
    const openList = () => {
        listRef.current.style.display = 'block';
        setTimeout(() => {
            setIsExpand(true);
        }, 10);
    }
    const suffixIcon = useMemo(() => {
        if (props.showClear && showClear && inputValue) {
            return <span className="react-select-input-close" onClick={() => {
                setInputValue('')
            }}><DeleteOutlined/></span>
        } else {
            if (isExpand) return <SearchOutlined/>
            else return <DownOutlined/>
        }
    }, [isExpand, showClear, inputValue])
    return (
        <div className="react-select-input-wrapper" style={{width: props.width}}>
            {props.disabled ?
                <div className="react-select-input-container disabled">
                    <input className="react-select-input disabled"
                           style={{padding:props.inputPadding,fontSize:props.inputFontSize}}
                           ref={inputRef}
                           value={inputValue}
                            disabled/>
                    <span className="down-arrow disabled">{suffixIcon}</span>
                </div> :
                <>
                    <div className="react-select-input-container"
                         onMouseOver={() => {
                             setShowClear(true)
                         }}
                         onMouseOut={() => {
                             setShowClear(false)
                         }}>
                        <input className="react-select-input"
                               style={{padding:props.inputPadding,fontSize:props.inputFontSize}}
                               ref={inputRef}
                               placeholder={props.placeholder}
                               value={inputValue}
                               onBlur={() => {
                                   closeList()
                               }}
                               onChange={(e) => {
                                   setInputValue(e.target.value);
                                   props.onChange(e)
                               }}
                               onFocus={() => {
                                   openList()
                               }}/>
                        <span className="down-arrow">{suffixIcon}</span>
                    </div>
                    <div style={select_list.length > 0 ? {} : {display: 'none'}}>
                        <div ref={listRef} className={'react-select-input-select-list'}
                             style={isExpand ? {width: props.width, height: props.listHeight} : {
                                 opacity: 0,
                                 width: props.width,
                                 height: props.listHeight
                             }}>
                            {select_list}
                        </div>
                    </div>
                </>}
        </div>
    )
}

export default SelectInput;