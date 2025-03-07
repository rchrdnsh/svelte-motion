/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
// import {fixed} from '../../../utils/fix-process-env';
// import { filter, complex } from 'style-value-types';
// import { getDefaultValueType } from './defaults.js';

// function getAnimatableNone(key, value) {
//     var _a;
//     var defaultValueType = getDefaultValueType(key);
//     if (defaultValueType !== filter)
//         defaultValueType = complex;
//     If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
//     return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
// }

// export { getAnimatableNone };

// -------- updating to most recent framer motion example -------- //

import { complex, filter } from "style-value-types"
import { getDefaultValueType } from "./defaults"

export function getAnimatableNone(key: string, value: string) {
    let defaultValueType = getDefaultValueType(key)
    if (defaultValueType !== filter) defaultValueType = complex
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return defaultValueType.getAnimatableNone?.(value)
}
