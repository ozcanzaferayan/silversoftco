/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

export function errorMsg(msg: string) {
  console.error(`React Strict DOM: ${msg}`);
}

export function warnMsg(msg: string) {
  console.warn(`React Strict DOM: ${msg}`);
}
