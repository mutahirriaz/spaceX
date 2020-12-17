import React from 'react'
import {useLaunchProfileQuery} from '../../generated/graphql'
import LaunchProfile from './LaunchProfile'
import {useParams} from 'react-router'
import Loader from './Loader'

const  LaunchProfileContainer = () => {

    const {id} = useParams()

    const {error,loading,data} = useLaunchProfileQuery({variables:{ id: id}});

    if(loading){
        return (
            <div className='loader'><Loader /></div>
        )
    }
    if(error|| !data){
        return <h1>error</h1>
    }

    console.log(data)
    return (
        <div>
            <LaunchProfile data={data} />
        </div>
    )
}

export default LaunchProfileContainer
