// import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    // const chatProps = useMultiChatLogic('9bdd66d8-c6b1-45d4-9331-305db6188974',
    // props.user.username,
    // props.user.secret);
    // return <div style={{height: '100vh'}}>
    //     <MultiChatSocket {...chatProps} />
    //     <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    // </div>
    return(
        <div style={{height: '100vh'}}>
            <PrettyChatWindow projectId="9bdd66d8-c6b1-45d4-9331-305db6188974"
                              // eslint-disable-next-line react/prop-types
                              username={props.user.username}
                              // eslint-disable-next-line react/prop-types
                              secret={props.user.secret}
                              style={{ height: '100%' }}/>
        </div>
    )
}

export default ChatsPage