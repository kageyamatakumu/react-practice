import classes from "./CssModules.module.scss";
import { memo } from "react";

export const CssModules = memo(() => {
    return(
        <div className={classes.container}>
            <p className={classes.title}>Css Modules</p>
            <button className={classes.button}>ボタン</button>
        </div>
    )
})