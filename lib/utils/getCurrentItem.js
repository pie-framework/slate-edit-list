// @flow
import { type Value, type Block } from 'slate';
import type Options from '../options';

/**
 * Return the current list item, from current selection or from a node.
 */
function getCurrentItem(opts: Options, value: Value, block?: Block): ?Block {
    const { document } = value;

    if (!block) {
        if (!value.selection.startKey) return null;
        block = value.startBlock;
    }

    if (block && block.type === opts.typeItem) {
        return block;
    } else {
        const parent = document.getParent(block.key);
        return parent && parent.type === opts.typeItem ? parent : null;

    }

}

export default getCurrentItem;
