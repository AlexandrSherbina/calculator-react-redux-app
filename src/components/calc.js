import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

const Calculator = ({result, symbol, equal, cancel, del }) => {
    return (
        <div className="calc">
        <output className="calc__result" >{result}</output>

        <button type="button" onClick={symbol} className="calc__btn">7</button>
        <button type="button" onClick={symbol} className="calc__btn">8</button>
        <button type="button" onClick={symbol} className="calc__btn">9</button>
        <button type="button" onClick={symbol} className="calc__btn calc__btn_operator">+</button>

        <button type="button" onClick={symbol} className="calc__btn">4</button>
        <button type="button" onClick={symbol} className="calc__btn">5</button>
        <button type="button" onClick={symbol} className="calc__btn">6</button>
        <button type="button" onClick={symbol} className="calc__btn calc__btn_operator">-</button>

        <button type="button" onClick={symbol} className="calc__btn">1</button>
        <button type="button" onClick={symbol} className="calc__btn">2</button>
        <button type="button" onClick={symbol} className="calc__btn">3</button>
        <button type="button" onClick={symbol} className="calc__btn calc__btn_operator">*</button>

        <button type="button" onClick={symbol} className="calc__btn">0</button>
        <button type="button" onClick={symbol} className="calc__btn">.</button>
        <button type="button" onClick={symbol} className="calc__btn">00</button>
        <button type="button" onClick={symbol} className="calc__btn calc__btn_operator">/</button>

        <button type="button" onClick={cancel} className="calc__btn calc__btn_reset">C</button>
        <button type="button" onClick={() => del(result)} className="calc__btn calc__btn_del">{'>>'}</button>
        <button type="button" result={result} onClick={() => equal(result)} className="calc__btn calc__btn_equal">=</button>
    </div>
    )
}

const mapStateToProps = ( state) => {
    return {
        result: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);