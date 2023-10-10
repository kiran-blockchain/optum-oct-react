import { lazy, Suspense, useState } from "react"
const LazyDemo = lazy(() => import("../components/LazyDemo"));

export const UserList = () => {

    return (
        <div>
            <Suspense fallback={<div>Loading!!!!!!!!</div>}>
                <LazyDemo userId="1" />
            </Suspense>
        
        </div>

    )
}