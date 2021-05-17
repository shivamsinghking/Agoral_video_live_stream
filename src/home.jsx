import { Label } from '@material-ui/icons';
import React, { useState } from 'react'
import styled from 'styled-components';
import { useGlobalMutation } from './utils/container'
import useRouter from './utils/use-router'

const SubContainer = styled.form`
 display: inline-block;
 width: 50%;
`;
const RowContainer = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: space-between;

`
const Home = () => {
    const [mode, changeMode] = useState("");
    const mutationCtx = useGlobalMutation()
    const routerCtx = useRouter()
    const handleOnChange = (e) => changeMode(e.target.value)

    const handleSumbit = (e) => {
        e.preventDefault()
        if (!mode) mutationCtx.toastError('You need enter the topic')
        else {
            routerCtx.history.push({
                pathname: mode
              }) 
        }
    }
    return (
        <div>
            <h1>Choose the mode</h1>
            <SubContainer>
                <RowContainer>
                    <label>Live Stream</label>
                    <input type="radio" name="mode" value="liveStream" onChange={handleOnChange} />
                </RowContainer>
                <RowContainer>
                    <label>Vide Call</label>
                    <input type="radio" name="mode" value="videoCall" onChange={handleOnChange} />
                </RowContainer>

                <button type="submit" onClick={handleSumbit}>NEXT</button>
            </SubContainer>
        </div>
    )
}

export default Home;