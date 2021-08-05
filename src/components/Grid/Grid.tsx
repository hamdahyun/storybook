import React, { FunctionComponent, ReactNode } from "react";
import styles from "./Grid.module.scss";
import cn from "classnames";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 'sm' | 'md' | 'lg';

const Grid: FunctionComponent<{
    children: ReactNode;
    container?: boolean;
    item?: boolean;
    cols?: Cols;
    spacing?: Spacing;
}> = ({children, container, item, cols, spacing}) => {
    const classNames = cn({
        [styles.grid_container]: container,
        [styles.grid_item]: item,
        [styles[`grid_cols_${cols}`]]: cols,
        [styles[`grid_spacing_${spacing}`]]: spacing,

    });
    return <div className={classNames}>{children}</div>
}
export default Grid;