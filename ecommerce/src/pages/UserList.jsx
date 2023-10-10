import { lazy, Suspense, useState } from "react"
import { EffectDemo } from "../components/EffectDemo";
const LazyDemo = lazy(() => import("../components/LazyDemo"));

export const UserList = () => {

    return (
        <div>
            {/* <Suspense fallback={<div>Loading!!!!!!!!</div>}>
                <LazyDemo userId="1" />
            </Suspense> */}
            <EffectDemo/>
        </div>

    )
}