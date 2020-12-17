import React from 'react'
import { useLaunchListQuery } from './../../generated/graphql'
import LaunchList from './LaunchList'
import Loader from './Loader'


const LaunchListContainer = () => {


    const { data, loading, error } = useLaunchListQuery();

    if (loading) {
        return(
            <div className='loader' ><Loader/></div>
        )
    }


    if (error || !data) {
        return <h1>error</h1>
    }

    console.log(data)

    return (
        <div>
            <LaunchList data={data} />
        </div>
    )
}

export default LaunchListContainer
