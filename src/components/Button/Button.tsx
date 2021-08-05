import React, { FunctionComponent, ReactNode } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

type btnType = "ty1" | "ty2" | "ty3" | "ty4" | "ty5";

const Button: FunctionComponent<{
    btnType?: btnType;
}> = ({children, btnType}) => {
    console.log(btnType);
    const classNames = cn(styles.btn,{
        [styles[`btn.btn_#{btnType}`]] : btnType,
    });
    // return <button className={classNames}>{children}</button>
    return <button className={[`${classNames}`].join(' ')}>{children}</button>
}
export default Button;