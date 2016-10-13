/**
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. *
 *
 * @providesModule toMatchSnapshotAssertion
 * @flow
 */

import type { Matcher } from '../../../../types/Matcher';
import type { EnzymeObject } from '../../../../types/EnzymeObject';

function toMatchSnapshotOverride(enzymeWrapper:EnzymeObject) : Matcher {
  console.log(expect.extend)
}

export default { 
  toMatchSnapshotz() {
    return {
      compare: toMatchSnapshotOverride,
    };
  },
};
