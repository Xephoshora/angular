var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { isBlank, isPresent, CONST_EXPR, looseIdentical } from 'angular2/src/facade/lang';
import { ListWrapper, StringMapWrapper } from 'angular2/src/facade/collection';
import { BaseException } from 'angular2/src/facade/exceptions';
import { AppElement } from './element';
import { ExpressionChangedAfterItHasBeenCheckedException } from './exceptions';
import { devModeEqual } from 'angular2/src/core/change_detection/change_detection';
import { Inject, Injectable } from 'angular2/src/core/di';
import { RootRenderer, RenderComponentType } from 'angular2/src/core/render/api';
import { APP_ID } from 'angular2/src/core/application_tokens';
export let ViewUtils = class ViewUtils {
    constructor(_renderer, _appId) {
        this._renderer = _renderer;
        this._appId = _appId;
        this._nextCompTypeId = 0;
    }
    /**
     * Used by the generated code
     */
    createRenderComponentType(templateUrl, slotCount, encapsulation, styles) {
        return new RenderComponentType(`${this._appId}-${this._nextCompTypeId++}`, templateUrl, slotCount, encapsulation, styles);
    }
    /** @internal */
    renderComponent(renderComponentType) {
        return this._renderer.renderComponent(renderComponentType);
    }
};
ViewUtils = __decorate([
    Injectable(),
    __param(1, Inject(APP_ID)), 
    __metadata('design:paramtypes', [RootRenderer, String])
], ViewUtils);
export function flattenNestedViewRenderNodes(nodes) {
    return _flattenNestedViewRenderNodes(nodes, []);
}
function _flattenNestedViewRenderNodes(nodes, renderNodes) {
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node instanceof AppElement) {
            var appEl = node;
            renderNodes.push(appEl.nativeElement);
            if (isPresent(appEl.nestedViews)) {
                for (var k = 0; k < appEl.nestedViews.length; k++) {
                    _flattenNestedViewRenderNodes(appEl.nestedViews[k].rootNodesOrAppElements, renderNodes);
                }
            }
        }
        else {
            renderNodes.push(node);
        }
    }
    return renderNodes;
}
const EMPTY_ARR = CONST_EXPR([]);
export function ensureSlotCount(projectableNodes, expectedSlotCount) {
    var res;
    if (isBlank(projectableNodes)) {
        res = EMPTY_ARR;
    }
    else if (projectableNodes.length < expectedSlotCount) {
        var givenSlotCount = projectableNodes.length;
        res = ListWrapper.createFixedSize(expectedSlotCount);
        for (var i = 0; i < expectedSlotCount; i++) {
            res[i] = (i < givenSlotCount) ? projectableNodes[i] : EMPTY_ARR;
        }
    }
    else {
        res = projectableNodes;
    }
    return res;
}
export const MAX_INTERPOLATION_VALUES = 9;
export function interpolate(valueCount, c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8, a9, c9) {
    switch (valueCount) {
        case 1:
            return c0 + _toStringWithNull(a1) + c1;
        case 2:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2;
        case 3:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3;
        case 4:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4;
        case 5:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5;
        case 6:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6;
        case 7:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6 + _toStringWithNull(a7) + c7;
        case 8:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8;
        case 9:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8 + _toStringWithNull(a9) +
                c9;
        default:
            throw new BaseException(`Does not support more than 9 expressions`);
    }
}
function _toStringWithNull(v) {
    return v != null ? v.toString() : '';
}
export function checkBinding(throwOnChange, oldValue, newValue) {
    if (throwOnChange) {
        if (!devModeEqual(oldValue, newValue)) {
            throw new ExpressionChangedAfterItHasBeenCheckedException(oldValue, newValue, null);
        }
        return false;
    }
    else {
        return !looseIdentical(oldValue, newValue);
    }
}
export function arrayLooseIdentical(a, b) {
    if (a.length != b.length)
        return false;
    for (var i = 0; i < a.length; ++i) {
        if (!looseIdentical(a[i], b[i]))
            return false;
    }
    return true;
}
export function mapLooseIdentical(m1, m2) {
    var k1 = StringMapWrapper.keys(m1);
    var k2 = StringMapWrapper.keys(m2);
    if (k1.length != k2.length) {
        return false;
    }
    var key;
    for (var i = 0; i < k1.length; i++) {
        key = k1[i];
        if (!looseIdentical(m1[key], m2[key])) {
            return false;
        }
    }
    return true;
}
