// memo化する必要はないかもしれない
import { memo } from 'react';

import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

export const EditButton = memo(() => {

    const {admin} = useContext(AdminFlagContext);

    return(
        <button disabled={!admin}>おはyぴ</button>
    )
})