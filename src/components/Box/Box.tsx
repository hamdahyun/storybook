import React, { FunctionComponent, ReactNode } from "react";
import styles from "./Box.module.scss"

const Box: FunctionComponent<{children: ReactNode}> = ({children}) => {
    return <div className={styles.box}>{children}</div>
}
export default Box;